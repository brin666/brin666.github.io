export const BOARD_SCHEMA = 1;
export const MODEL_REVISION = 'gene-expression-v20';

export const WHITEBOARD_DB_NAME = 'gene-expression-whiteboard';
export const WHITEBOARD_STORE_NAME = 'boards';
export const WHITEBOARD_RECOVERY_KEY = 'gene-expression-whiteboard-recovery-v1';

export const BOARD_LIMITS = Object.freeze({
  maxOperations: 2_000,
  maxPoints: 100_000,
  maxBytes: 3 * 1024 * 1024,
});

const SUPPORTED_OPERATION_TYPES = new Set(['pen', 'highlighter', 'line', 'arrow', 'text']);
const RECOVERY_JOURNAL_VERSION = 1;
const UTF8_ENCODER = typeof TextEncoder === 'undefined' ? null : new TextEncoder();

function byteLength(value) {
  if (UTF8_ENCODER) return UTF8_ENCODER.encode(value).byteLength;
  return unescape(encodeURIComponent(value)).length;
}

function validationFailure(code, reason) {
  return { valid: false, code, reason };
}

function isPlainObject(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function validateFiniteJson(root, maxBytes = BOARD_LIMITS.maxBytes) {
  const stack = [{ value: root, path: '$' }];
  const active = new Set();
  let estimatedBytes = 0;
  let nodes = 0;

  while (stack.length > 0) {
    const { value, path, leave } = stack.pop();
    if (leave) {
      active.delete(value);
      continue;
    }

    nodes += 1;
    if (nodes > 300_000) return validationFailure('TOO_COMPLEX', '数据结构过于复杂。');

    if (value === null) {
      estimatedBytes += 4;
    } else if (typeof value === 'string') {
      estimatedBytes += byteLength(JSON.stringify(value));
    } else if (typeof value === 'boolean') {
      estimatedBytes += value ? 4 : 5;
    } else if (typeof value === 'number') {
      if (!Number.isFinite(value)) return validationFailure('INVALID_JSON', `${path} 必须是有限数字。`);
      estimatedBytes += String(value).length;
    } else if (Array.isArray(value)) {
      if (active.has(value)) return validationFailure('INVALID_JSON', `${path} 含有循环引用。`);
      active.add(value);
      estimatedBytes += 2 + Math.max(0, value.length - 1);
      stack.push({ value, path, leave: true });
      for (let index = value.length - 1; index >= 0; index -= 1) {
        if (!(index in value)) return validationFailure('INVALID_JSON', `${path}[${index}] 不能为空洞。`);
        stack.push({ value: value[index], path: `${path}[${index}]` });
      }
    } else if (isPlainObject(value)) {
      if (active.has(value)) return validationFailure('INVALID_JSON', `${path} 含有循环引用。`);
      active.add(value);
      const keys = Reflect.ownKeys(value);
      if (keys.some((key) => typeof key !== 'string')) {
        return validationFailure('INVALID_JSON', `${path} 不能包含 Symbol 属性。`);
      }
      estimatedBytes += 2 + Math.max(0, keys.length - 1);
      stack.push({ value, path, leave: true });
      for (let index = keys.length - 1; index >= 0; index -= 1) {
        const key = keys[index];
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if (!descriptor || !Object.hasOwn(descriptor, 'value')) {
          return validationFailure('INVALID_JSON', `${path}.${key} 必须是普通数据属性。`);
        }
        estimatedBytes += byteLength(JSON.stringify(key)) + 1;
        stack.push({ value: descriptor.value, path: `${path}.${key}` });
      }
    } else {
      return validationFailure('INVALID_JSON', `${path} 含有无法保存的值。`);
    }

    if (estimatedBytes > maxBytes) {
      return validationFailure('TOO_LARGE', `白板文档超过 ${Math.floor(maxBytes / (1024 * 1024))} MiB 保存上限。`);
    }
  }

  return { valid: true };
}

function validTimestamp(value) {
  if (typeof value === 'number') return Number.isFinite(value) && value >= 0;
  return typeof value === 'string' && value.length > 0 && value.length <= 100;
}

function validVector(value) {
  return Array.isArray(value)
    && value.length === 3
    && value.every((component) => typeof component === 'number' && Number.isFinite(component));
}

function validateCamera(camera, label) {
  if (!isPlainObject(camera) || !validVector(camera.position) || !validVector(camera.target)) {
    return validationFailure('INVALID_CAMERA', `${label} 需要有限的三维 position 和 target。`);
  }
  if (camera.zoom !== undefined && (typeof camera.zoom !== 'number' || !Number.isFinite(camera.zoom) || camera.zoom <= 0)) {
    return validationFailure('INVALID_CAMERA', `${label}.zoom 必须是正数。`);
  }
  return { valid: true };
}

function validateOperations(operations, label = 'operations') {
  if (!Array.isArray(operations)) return validationFailure('INVALID_OPERATIONS', `${label} 必须是数组。`);
  if (operations.length > BOARD_LIMITS.maxOperations) {
    return validationFailure('TOO_MANY_OPERATIONS', `白板最多保存 ${BOARD_LIMITS.maxOperations} 个笔迹或文字。`);
  }

  let pointCount = 0;
  for (let index = 0; index < operations.length; index += 1) {
    const operation = operations[index];
    const path = `${label}[${index}]`;
    if (!isPlainObject(operation)) return validationFailure('INVALID_OPERATION', `${path} 结构无效。`);
    if (typeof operation.id !== 'string' || operation.id.length === 0 || operation.id.length > 200) {
      return validationFailure('INVALID_OPERATION', `${path}.id 无效。`);
    }
    if (!SUPPORTED_OPERATION_TYPES.has(operation.type)) {
      return validationFailure('INVALID_OPERATION', `${path}.type 不受支持。`);
    }
    if (typeof operation.color !== 'string' || !/^#[0-9a-f]{6}$/i.test(operation.color)) {
      return validationFailure('INVALID_OPERATION', `${path}.color 必须是 #rrggbb 颜色。`);
    }
    if (typeof operation.width !== 'number' || !Number.isFinite(operation.width) || operation.width <= 0 || operation.width > 512) {
      return validationFailure('INVALID_OPERATION', `${path}.width 必须在 0 到 512 之间。`);
    }

    if (operation.type === 'text') {
      if (typeof operation.text !== 'string' || operation.text.length === 0 || operation.text.length > 10_000) {
        return validationFailure('INVALID_OPERATION', `${path}.text 无效。`);
      }
      if (!Number.isFinite(operation.x) || !Number.isFinite(operation.y)) {
        return validationFailure('INVALID_OPERATION', `${path} 的文字位置必须是有限数字。`);
      }
      if (operation.fontSize !== undefined
        && (!Number.isFinite(operation.fontSize) || operation.fontSize <= 0 || operation.fontSize > 512)) {
        return validationFailure('INVALID_OPERATION', `${path}.fontSize 无效。`);
      }
    }

    if (operation.points !== undefined) {
      if (!Array.isArray(operation.points)) return validationFailure('INVALID_OPERATION', `${path}.points 必须是数组。`);
      pointCount += operation.points.length;
      for (let pointIndex = 0; pointIndex < operation.points.length; pointIndex += 1) {
        const point = operation.points[pointIndex];
        if (!Array.isArray(point) || point.length !== 2
          || !Number.isFinite(point[0]) || !Number.isFinite(point[1])) {
          return validationFailure('INVALID_OPERATION', `${path}.points[${pointIndex}] 必须是有限的 [x, y]。`);
        }
      }
    } else if (operation.type !== 'text') {
      return validationFailure('INVALID_OPERATION', `${path}.points 缺失。`);
    }

    if (operation.type !== 'text' && operation.points.length === 0) {
      return validationFailure('INVALID_OPERATION', `${path} 至少需要一个点。`);
    }
    if (operation.x !== undefined && !Number.isFinite(operation.x)) {
      return validationFailure('INVALID_OPERATION', `${path}.x 必须是有限数字。`);
    }
    if (operation.y !== undefined && !Number.isFinite(operation.y)) {
      return validationFailure('INVALID_OPERATION', `${path}.y 必须是有限数字。`);
    }
    if (pointCount > BOARD_LIMITS.maxPoints) {
      return validationFailure('TOO_MANY_POINTS', `白板最多保存 ${BOARD_LIMITS.maxPoints} 个坐标点。`);
    }
  }

  return { valid: true };
}

/** Validate a persisted whiteboard document without changing it. */
export function validateBoard(record) {
  if (!isPlainObject(record)) return validationFailure('INVALID_DOCUMENT', '白板文档结构无效。');
  if (record.schemaVersion !== BOARD_SCHEMA) {
    return validationFailure('INCOMPATIBLE_SCHEMA', `白板格式版本 ${String(record.schemaVersion)} 不受当前版本支持。`);
  }
  if (record.modelRevision !== MODEL_REVISION) {
    return validationFailure('INCOMPATIBLE_MODEL', `白板模型版本 ${String(record.modelRevision)} 不受当前版本支持。`);
  }
  if (typeof record.id !== 'string' || record.id.length === 0 || record.id.length > 200) {
    return validationFailure('INVALID_DOCUMENT', '白板 id 无效。');
  }
  if (typeof record.contextKey !== 'string' || record.contextKey.length === 0 || record.contextKey.length > 2_000) {
    return validationFailure('INVALID_DOCUMENT', '白板 contextKey 无效。');
  }
  if (typeof record.title !== 'string' || record.title.length > 500) {
    return validationFailure('INVALID_DOCUMENT', '白板标题无效。');
  }
  if (!validTimestamp(record.createdAt) || !validTimestamp(record.updatedAt)) {
    return validationFailure('INVALID_DOCUMENT', '白板时间信息无效。');
  }
  if (!isPlainObject(record.viewport)
    || !Number.isFinite(record.viewport.width) || record.viewport.width <= 0
    || !Number.isFinite(record.viewport.height) || record.viewport.height <= 0) {
    return validationFailure('INVALID_DOCUMENT', '白板视口尺寸无效。');
  }
  if (!isPlainObject(record.snapshot) || record.snapshot.version === undefined) {
    return validationFailure('INVALID_SNAPSHOT', '教学快照缺少版本信息。');
  }
  const cameraResult = validateCamera(record.camera, 'camera');
  if (!cameraResult.valid) return cameraResult;
  const resetCameraResult = validateCamera(record.resetCamera, 'resetCamera');
  if (!resetCameraResult.valid) return resetCameraResult;

  const operationsResult = validateOperations(record.operations);
  if (!operationsResult.valid) return operationsResult;
  if (record.redo !== undefined) {
    const redoResult = validateOperations(record.redo, 'redo');
    if (!redoResult.valid) return redoResult;
  }

  return validateFiniteJson(record);
}

function cloneDocument(record) {
  if (typeof structuredClone === 'function') return structuredClone(record);
  return JSON.parse(JSON.stringify(record));
}

function cloneForMemory(record) {
  try {
    return cloneDocument(record);
  } catch {
    // Keeping the caller's object reference is safer than dropping an unsaved board.
    return record;
  }
}

function statusMessage(state, code) {
  if (code === 'RECOVERY_CHECKPOINTED') return '白板已写入临时恢复记录，正在同步到本地数据库。';
  if (code === 'RECOVERY_PENDING') return '发现未同步的白板恢复记录，将在下次保存时写入本地数据库。';
  if (code === 'LOCAL_STORAGE_UNAVAILABLE') return '浏览器无法使用同步恢复记录；普通保存仍会尝试写入本地数据库。';
  if (code === 'INCOMPATIBLE_JOURNAL' || code === 'INVALID_JOURNAL' || code === 'INCOMPATIBLE_SCHEMA' || code === 'INCOMPATIBLE_MODEL') {
    return '发现无法识别或由其他版本写入的恢复记录，原数据已保留且不会覆盖。';
  }
  if (code === 'JOURNAL_TOO_LARGE') return '临时恢复记录超过本地上限；当前白板仍保留在内存中。';
  if (code === 'JOURNAL_NEWER') return '已有更新的临时恢复记录；原记录已保留，当前白板仍在内存中。';
  if (code === 'JOURNAL_CLEANUP_FAILED') return '白板已写入本地数据库，但临时恢复记录未能清理。';
  if (code === 'ID_COLLISION') {
    return '已有白板来自其他页面上下文，原数据已保留且不会覆盖。';
  }
  if (code === 'TOO_LARGE' || code === 'TOO_MANY_OPERATIONS' || code === 'TOO_MANY_POINTS') {
    return '白板内容超过本地保存上限；当前页面仍保留在内存中，请删减内容后重试。';
  }
  if (state === 'saving') return '正在保存白板…';
  if (state === 'saved') return '白板已保存在此浏览器。';
  if (state === 'incompatible') return '发现由其他格式或模型创建的白板，原数据已保留且不会覆盖。';
  if (code === 'QUOTA_EXCEEDED') return '浏览器本地空间不足；当前白板仍保留在内存中，请清理空间后重试。';
  if (code === 'UNAVAILABLE') return '浏览器无法使用本地数据库；当前白板暂存在内存中，刷新后可能无法恢复。';
  return '白板未能写入本地存储；当前页面仍保留在内存中。';
}

function makeStatus(state, code) {
  const result = { state, message: statusMessage(state, code) };
  if (code) result.code = code;
  return result;
}

function classifyStorageError(error) {
  const name = error?.name || '';
  if (name === 'QuotaExceededError' || name === 'NS_ERROR_DOM_QUOTA_REACHED' || error?.code === 22) {
    return { state: 'error', code: 'QUOTA_EXCEEDED' };
  }
  if (name === 'VersionError') return { state: 'incompatible', code: 'DATABASE_VERSION' };
  if (name === 'BlockedError') return { state: 'unavailable', code: 'BLOCKED' };
  if (name === 'UnavailableError' || name === 'SecurityError' || name === 'InvalidStateError') {
    return { state: 'unavailable', code: 'UNAVAILABLE' };
  }
  return { state: 'error', code: 'STORAGE_ERROR' };
}

function recordCompatibility(record, key) {
  if (!isPlainObject(record)) return validationFailure('INVALID_DOCUMENT', '白板文档结构无效。');
  if (key !== undefined && record.id !== key) return validationFailure('INVALID_DOCUMENT', '白板 id 与存储键不一致。');
  return validateBoard(record);
}

function makeMetadata(record, key, validation) {
  const id = typeof record?.id === 'string' && record.id.length <= 200 ? record.id : key;
  return {
    id: typeof id === 'string' ? id.slice(0, 200) : '',
    contextKey: typeof record?.contextKey === 'string' ? record.contextKey.slice(0, 2_000) : '',
    title: typeof record?.title === 'string' ? record.title.slice(0, 500) : '无法读取的白板',
    createdAt: validTimestamp(record?.createdAt) ? record.createdAt : null,
    updatedAt: validTimestamp(record?.updatedAt) ? record.updatedAt : null,
    compatible: validation.valid,
    ...(validation.valid ? {} : { code: validation.code }),
  };
}

function parseRecoveryJournal(raw) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return validationFailure('INVALID_JOURNAL', '临时恢复记录无法解析。');
  }

  let records;
  if (isPlainObject(parsed) && Object.hasOwn(parsed, 'journalVersion')) {
    if (parsed.journalVersion !== RECOVERY_JOURNAL_VERSION || !Array.isArray(parsed.records)) {
      return validationFailure('INCOMPATIBLE_JOURNAL', '临时恢复记录版本不受当前版本支持。');
    }
    records = parsed.records;
  } else if (isPlainObject(parsed) && Object.hasOwn(parsed, 'schemaVersion')) {
    // Accept the original one-document representation for forward compatibility.
    records = [parsed];
  } else {
    return validationFailure('INVALID_JOURNAL', '临时恢复记录结构无效。');
  }

  const ids = new Set();
  for (const record of records) {
    const validation = validateBoard(record);
    if (!validation.valid) return validation;
    if (ids.has(record.id)) return validationFailure('INVALID_JOURNAL', '临时恢复记录含有重复白板。');
    ids.add(record.id);
  }
  return { valid: true, records };
}

function serializeRecoveryJournal(records) {
  return JSON.stringify(records.length === 1
    ? records[0]
    : { journalVersion: RECOVERY_JOURNAL_VERSION, records });
}

function timestampValue(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function compareTimestamps(left, right) {
  const leftValue = timestampValue(left);
  const rightValue = timestampValue(right);
  if (leftValue !== null && rightValue !== null) return Math.sign(leftValue - rightValue);
  if (left === right) return 0;
  if (typeof left === 'string' && typeof right === 'string') return Math.sign(left.localeCompare(right));
  return null;
}

/**
 * A local-only IndexedDB store. Memory retains the latest board even when a
 * write fails so the active page can keep drawing until it is refreshed.
 */
export function createBoardStore(options = {}) {
  const config = options || {};
  const onStatus = typeof config.onStatus === 'function' ? config.onStatus : () => {};
  const debounceMs = config.debounceMs ?? 500;
  let indexedDB = config.indexedDB;
  let localStorage = config.localStorage;
  let localStorageAccessError = null;
  try {
    if (indexedDB === undefined) indexedDB = globalThis.indexedDB;
  } catch {
    indexedDB = null;
  }
  try {
    if (!Object.hasOwn(config, 'localStorage')) localStorage = globalThis.localStorage;
  } catch (error) {
    localStorage = null;
    localStorageAccessError = error;
  }

  const memory = new Map();
  const pending = new Map();
  let timer = null;
  let disposed = false;
  let database = null;
  let opening = null;
  let flushing = null;

  function emitStatus(state, code, extra = {}) {
    try {
      onStatus({ ...makeStatus(state, code), ...extra });
    } catch {
      // Status UI errors must not interrupt the whiteboard's save queue.
    }
  }

  function openDatabase() {
    if (database) return Promise.resolve(database);
    if (opening) return opening;
    if (!indexedDB || typeof indexedDB.open !== 'function') {
      const error = new Error('IndexedDB is unavailable');
      error.name = 'UnavailableError';
      return Promise.reject(error);
    }

    opening = new Promise((resolve, reject) => {
      let settled = false;
      let request;
      try {
        // Omitting the version opens an existing database at its current
        // version without requesting an upgrade. Document checks gate writes.
        request = indexedDB.open(WHITEBOARD_DB_NAME);
      } catch (error) {
        reject(error);
        return;
      }

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(WHITEBOARD_STORE_NAME)) {
          db.createObjectStore(WHITEBOARD_STORE_NAME, { keyPath: 'id' });
        }
      };
      request.onerror = () => {
        if (settled) return;
        settled = true;
        reject(request.error || new Error('Unable to open IndexedDB'));
      };
      request.onblocked = () => {
        if (settled) return;
        settled = true;
        const error = new Error('IndexedDB upgrade is blocked by another tab');
        error.name = 'BlockedError';
        reject(error);
      };
      request.onsuccess = () => {
        const db = request.result;
        if (settled) {
          db.close();
          return;
        }
        settled = true;
        database = db;
        db.onversionchange = () => {
          db.close();
          if (database === db) database = null;
        };
        resolve(db);
      };
    }).finally(() => {
      opening = null;
    });

    return opening;
  }

  function failStatus(error, id) {
    const classified = classifyStorageError(error);
    emitStatus(classified.state, classified.code, { ...(id ? { id } : {}) });
    return classified;
  }

  function readRecoveryJournal() {
    if (localStorageAccessError) throw localStorageAccessError;
    if (!localStorage || typeof localStorage.getItem !== 'function') {
      const error = new Error('Synchronous local recovery storage is unavailable');
      error.name = 'UnavailableError';
      error.code = 'LOCAL_STORAGE_UNAVAILABLE';
      throw error;
    }
    const raw = localStorage.getItem(WHITEBOARD_RECOVERY_KEY);
    return raw === null ? { valid: true, records: [] } : parseRecoveryJournal(raw);
  }

  function recoverFromJournal() {
    if (!localStorage && !localStorageAccessError) return;
    let journal;
    try {
      journal = readRecoveryJournal();
    } catch (error) {
      emitStatus('unavailable', 'LOCAL_STORAGE_UNAVAILABLE', { message: statusMessage('unavailable', 'LOCAL_STORAGE_UNAVAILABLE') });
      return;
    }
    if (!journal.valid) {
      emitStatus('incompatible', journal.code);
      return;
    }
    for (const record of journal.records) {
      const cloned = cloneForMemory(record);
      memory.set(cloned.id, cloned);
      pending.set(cloned.id, cloned);
    }
    if (journal.records.length > 0) {
      emitStatus('saving', 'RECOVERY_PENDING', {
        message: '发现未同步的白板恢复记录，将在下次保存时写入本地数据库。',
      });
    }
  }

  function clearJournalAfterPersist(record) {
    if (!localStorage || typeof localStorage.getItem !== 'function') return null;
    let journal;
    try {
      journal = readRecoveryJournal();
    } catch {
      return {
        state: 'saved',
        code: 'JOURNAL_CLEANUP_FAILED',
        message: statusMessage('saved', 'JOURNAL_CLEANUP_FAILED'),
      };
    }
    if (!journal.valid) {
      return { state: 'incompatible', code: journal.code };
    }

    const index = journal.records.findIndex((candidate) => candidate.id === record.id);
    if (index < 0) return null;
    const journalRecord = journal.records[index];
    if (journalRecord.contextKey !== record.contextKey) {
      return { state: 'incompatible', code: 'ID_COLLISION' };
    }
    const timestampOrder = compareTimestamps(journalRecord.updatedAt, record.updatedAt);
    if (timestampOrder === null || timestampOrder > 0) {
      return {
        state: 'saving',
        code: 'JOURNAL_NEWER',
        message: statusMessage('saving', 'JOURNAL_NEWER'),
      };
    }

    const remaining = journal.records.filter((_, recordIndex) => recordIndex !== index);
    try {
      if (remaining.length === 0) localStorage.removeItem(WHITEBOARD_RECOVERY_KEY);
      else localStorage.setItem(WHITEBOARD_RECOVERY_KEY, serializeRecoveryJournal(remaining));
      return null;
    } catch {
      return {
        state: 'saved',
        code: 'JOURNAL_CLEANUP_FAILED',
        message: statusMessage('saved', 'JOURNAL_CLEANUP_FAILED'),
      };
    }
  }

  function checkpoint(record) {
    if (disposed) return false;
    const cloned = cloneForMemory(record);
    const id = typeof cloned?.id === 'string' ? cloned.id : '';
    if (id) {
      memory.set(id, cloned);
      pending.set(id, cloned);
    }
    if (!id) {
      emitStatus('error', 'INVALID_DOCUMENT');
      return false;
    }

    const validation = validateBoard(cloned);
    if (!validation.valid) {
      emitStatus('error', validation.code, { id });
      return false;
    }

    let journal;
    try {
      journal = readRecoveryJournal();
    } catch (error) {
      const classification = classifyStorageError(error);
      if (classification.code === 'QUOTA_EXCEEDED') failStatus(error, id);
      else emitStatus('unavailable', 'LOCAL_STORAGE_UNAVAILABLE', { id });
      return false;
    }
    if (!journal.valid) {
      emitStatus('incompatible', journal.code, { id });
      return false;
    }

    const records = [...journal.records];
    const existingIndex = records.findIndex((candidate) => candidate.id === id);
    if (existingIndex >= 0) {
      const existing = records[existingIndex];
      if (existing.contextKey !== cloned.contextKey) {
        emitStatus('incompatible', 'ID_COLLISION', { id });
        return false;
      }
      const timestampOrder = compareTimestamps(cloned.updatedAt, existing.updatedAt);
      if (timestampOrder === null || timestampOrder < 0) {
        emitStatus('error', 'JOURNAL_NEWER', { id });
        return false;
      }
      records[existingIndex] = cloned;
    } else {
      records.push(cloned);
    }

    let serialized;
    try {
      serialized = serializeRecoveryJournal(records);
    } catch (error) {
      failStatus(error, id);
      return false;
    }
    if (byteLength(serialized) > BOARD_LIMITS.maxBytes) {
      emitStatus('error', 'JOURNAL_TOO_LARGE', { id });
      return false;
    }

    try {
      if (typeof localStorage.setItem !== 'function') {
        const error = new Error('Synchronous local recovery storage cannot write');
        error.name = 'UnavailableError';
        throw error;
      }
      localStorage.setItem(WHITEBOARD_RECOVERY_KEY, serialized);
      emitStatus('saving', 'RECOVERY_CHECKPOINTED', {
        id,
        message: statusMessage('saving', 'RECOVERY_CHECKPOINTED'),
      });
      return true;
    } catch (error) {
      const classification = classifyStorageError(error);
      if (classification.code === 'UNAVAILABLE') {
        emitStatus('unavailable', 'LOCAL_STORAGE_UNAVAILABLE', { id });
      } else {
        failStatus(error, id);
      }
      return false;
    }
  }

  function readAllMetadata(db) {
    return new Promise((resolve, reject) => {
      let transaction;
      try {
        transaction = db.transaction(WHITEBOARD_STORE_NAME, 'readonly');
      } catch (error) {
        reject(error);
        return;
      }
      const request = transaction.objectStore(WHITEBOARD_STORE_NAME).openCursor();
      let rows = [];
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) return;
        const record = cursor.value;
        const key = typeof cursor.primaryKey === 'string' ? cursor.primaryKey : '';
        const validation = recordCompatibility(record, key || undefined);
        rows.push(makeMetadata(record, key, validation));
        cursor.continue();
      };
      request.onerror = () => reject(request.error || new Error('Unable to read whiteboards'));
      transaction.oncomplete = () => resolve(rows);
      transaction.onerror = () => reject(transaction.error || new Error('Unable to read whiteboards'));
      transaction.onabort = () => reject(transaction.error || new Error('Whiteboard read aborted'));
    });
  }

  function readOne(db, id) {
    return new Promise((resolve, reject) => {
      let transaction;
      try {
        transaction = db.transaction(WHITEBOARD_STORE_NAME, 'readonly');
      } catch (error) {
        reject(error);
        return;
      }
      const request = transaction.objectStore(WHITEBOARD_STORE_NAME).get(id);
      let result;
      request.onsuccess = () => { result = request.result; };
      request.onerror = () => reject(request.error || new Error('Unable to read whiteboard'));
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error || new Error('Unable to read whiteboard'));
      transaction.onabort = () => reject(transaction.error || new Error('Whiteboard read aborted'));
    });
  }

  function writeOne(db, record) {
    return new Promise((resolve, reject) => {
      let transaction;
      try {
        transaction = db.transaction(WHITEBOARD_STORE_NAME, 'readwrite');
      } catch (error) {
        reject(error);
        return;
      }

      const store = transaction.objectStore(WHITEBOARD_STORE_NAME);
      let refusal = null;
      let supersededBy = null;
      const existingRequest = store.get(record.id);
      existingRequest.onsuccess = () => {
        const existing = existingRequest.result;
        if (existing !== undefined) {
          const validation = recordCompatibility(existing, record.id);
          if (!validation.valid) {
            refusal = Object.assign(new Error(validation.reason), { name: 'IncompatibleBoardError', code: validation.code });
            transaction.abort();
            return;
          }
          if (existing.contextKey !== record.contextKey) {
            refusal = Object.assign(new Error('Board id is already used by another frozen context'), {
              name: 'IncompatibleBoardError',
              code: 'ID_COLLISION',
            });
            transaction.abort();
            return;
          }
          const timestampOrder = compareTimestamps(existing.updatedAt, record.updatedAt);
          if (timestampOrder > 0) {
            // Recovery journals can outlive their successful database write
            // if localStorage cleanup fails. Never let one replace a newer
            // durable document.
            supersededBy = existing;
            return;
          }
        }
        try {
          store.put(record);
        } catch (error) {
          // IndexedDBObjectStore.put may throw synchronously (notably for
          // quota or clone failures). Catch inside the request callback so it
          // cannot escape as a page error, then abort the still-active write.
          refusal = error;
          try {
            transaction.abort();
          } catch {
            // If the transaction has already become inactive, oncomplete will
            // still reject through the refusal check below.
          }
        }
      };
      transaction.oncomplete = () => {
        if (refusal) reject(refusal);
        else resolve(supersededBy ? { superseded: true, record: supersededBy } : { superseded: false, record });
      };
      transaction.onerror = () => reject(refusal || transaction.error || new Error('Whiteboard save failed'));
      transaction.onabort = () => reject(refusal || transaction.error || new Error('Whiteboard save aborted'));
    });
  }

  function deleteOne(db, id) {
    return new Promise((resolve, reject) => {
      let transaction;
      try {
        transaction = db.transaction(WHITEBOARD_STORE_NAME, 'readwrite');
      } catch (error) {
        reject(error);
        return;
      }
      const store = transaction.objectStore(WHITEBOARD_STORE_NAME);
      let refusal = null;
      const request = store.get(id);
      request.onsuccess = () => {
        if (request.result !== undefined) {
          const validation = recordCompatibility(request.result, id);
          if (!validation.valid) {
            refusal = Object.assign(new Error(validation.reason), { name: 'IncompatibleBoardError', code: validation.code });
            transaction.abort();
            return;
          }
        }
        store.delete(id);
      };
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(refusal || transaction.error || new Error('Whiteboard delete failed'));
      transaction.onabort = () => reject(refusal || transaction.error || new Error('Whiteboard delete aborted'));
    });
  }

  async function persist(record) {
    const validation = validateBoard(record);
    if (!validation.valid) {
      const error = Object.assign(new Error(validation.reason), { name: 'ValidationError', code: validation.code });
      failStatus(error, record?.id);
      return false;
    }

    let serialized;
    try {
      serialized = cloneDocument(record);
    } catch (error) {
      failStatus(error, record.id);
      return false;
    }

    try {
      const db = await openDatabase();
      const outcome = await writeOne(db, serialized);
      const persistedRecord = outcome.superseded ? outcome.record : serialized;
      if (outcome.superseded) {
        // The pending write was stale. Make reads reflect the durable record,
        // while leaving any concurrently scheduled replacement untouched.
        if (memory.get(record.id) === record) memory.set(record.id, cloneForMemory(persistedRecord));
        if (pending.get(record.id) === record) pending.delete(record.id);
      }
      const journalStatus = clearJournalAfterPersist(persistedRecord);
      if (journalStatus) emitStatus(journalStatus.state, journalStatus.code, { id: record.id, message: journalStatus.message });
      else emitStatus('saved', undefined, { id: record.id });
      return true;
    } catch (error) {
      if (error?.name === 'IncompatibleBoardError') {
        emitStatus('incompatible', error.code || 'INCOMPATIBLE', { id: record.id });
      } else {
        failStatus(error, record.id);
      }
      return false;
    }
  }

  async function list() {
    let persistedRows = [];
    try {
      persistedRows = await readAllMetadata(await openDatabase());
    } catch (error) {
      failStatus(error);
      persistedRows = [];
    }

    const metadata = new Map();
    for (const row of persistedRows) {
      metadata.set(row.id || `invalid-${metadata.size}`, row);
    }
    for (const [id, record] of memory) {
      const validation = validateBoard(record);
      metadata.set(id, makeMetadata(record, id, validation));
    }

    const rows = [...metadata.values()].sort((left, right) => {
      const leftTime = typeof left.updatedAt === 'number' ? left.updatedAt : Date.parse(left.updatedAt) || 0;
      const rightTime = typeof right.updatedAt === 'number' ? right.updatedAt : Date.parse(right.updatedAt) || 0;
      return rightTime - leftTime;
    });
    if (rows.some((row) => !row.compatible)) emitStatus('incompatible', rows.find((row) => !row.compatible)?.code);
    return rows;
  }

  async function get(id) {
    if (memory.has(id)) return cloneForMemory(memory.get(id));
    let record;
    try {
      record = await readOne(await openDatabase(), id);
    } catch (error) {
      failStatus(error, id);
      return null;
    }
    if (record === undefined) return null;

    const validation = recordCompatibility(record, id);
    if (!validation.valid) {
      emitStatus('incompatible', validation.code, { id });
      return {
        incompatible: true,
        id,
        code: validation.code,
        message: statusMessage('incompatible', validation.code),
      };
    }

    const cloned = cloneForMemory(record);
    memory.set(id, cloned);
    return cloneForMemory(cloned);
  }

  function schedule(record) {
    if (disposed) return false;
    const cloned = cloneForMemory(record);
    const id = typeof cloned?.id === 'string' ? cloned.id : '';
    if (id) memory.set(id, cloned);
    const validation = validateBoard(cloned);
    if (!id) {
      emitStatus('error', validation.code || 'INVALID_DOCUMENT');
      return false;
    }
    pending.set(id, cloned);

    if (!validation.valid) {
      emitStatus('error', validation.code, { id });
    } else {
      emitStatus('saving', undefined, { id });
    }

    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      void flush();
    }, Math.max(0, Number.isFinite(debounceMs) ? debounceMs : 500));
    return true;
  }

  function flush() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    if (flushing) return flushing;

    flushing = (async () => {
      let allSaved = true;
      while (pending.size > 0) {
        const batch = [...pending.entries()];
        for (const [id, record] of batch) {
          if (pending.get(id) === record) pending.delete(id);
        }

        for (let index = 0; index < batch.length; index += 1) {
          const [id, record] = batch[index];
          const saved = await persist(record);
          if (!saved) {
            allSaved = false;
            // Preserve the failed and unprocessed batch entries. A newer save
            // scheduled while this batch was writing always takes precedence.
            for (const [remainingId, remainingRecord] of batch.slice(index)) {
              if (!pending.has(remainingId)) pending.set(remainingId, remainingRecord);
            }
            // Leave failed records queued for a later explicit flush or a newer schedule.
            return false;
          }
        }
      }
      return allSaved;
    })().finally(() => {
      flushing = null;
    });

    return flushing;
  }

  async function remove(id) {
    if (disposed || typeof id !== 'string' || id.length === 0) return false;
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    // Finish any queued write before deleting so a delayed save cannot resurrect it.
    if (flushing) await flushing;
    const pendingRecord = pending.get(id);
    if (pendingRecord) pending.delete(id);

    try {
      const db = await openDatabase();
      await deleteOne(db, id);
      memory.delete(id);
      emitStatus('saved', undefined, { id, message: '白板已清除。' });
      return true;
    } catch (error) {
      if (pendingRecord && !pending.has(id)) pending.set(id, pendingRecord);
      if (error?.name === 'IncompatibleBoardError') {
        emitStatus('incompatible', error.code || 'INCOMPATIBLE', { id });
      } else {
        failStatus(error, id);
      }
      return false;
    }
  }

  function dispose() {
    disposed = true;
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    // Close only this connection; never delete the database or its stored documents.
    if (database) {
      database.close();
      database = null;
    }
  }

  recoverFromJournal();
  return { list, get, schedule, checkpoint, flush, remove, dispose };
}
