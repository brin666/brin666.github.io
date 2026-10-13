import { CODONS, RNA, indicesForCodon } from './biology.mjs';

export const TOTAL = 66;

export const CHAPTERS = Object.freeze([
  Object.freeze({ id: 0, key: 'dna', title: 'DNA', start: 0, end: 4 }),
  Object.freeze({ id: 1, key: 'transcription', title: 'Transcription', start: 4, end: 34 }),
  Object.freeze({ id: 2, key: 'export', title: 'RNA export', start: 34, end: 38 }),
  Object.freeze({ id: 3, key: 'translation', title: 'Translation', start: 38, end: 62 }),
  Object.freeze({ id: 4, key: 'comparison', title: 'Comparison', start: 62, end: 66 }),
]);

const TRANSCRIPTION_START = CHAPTERS[1].start;
const TRANSCRIPTION_END = CHAPTERS[1].end;
const TRANSLATION_START = CHAPTERS[3].start;
const TRANSLATION_END = CHAPTERS[3].end;

function validateTime(time) {
  if (typeof time !== 'number' || !Number.isFinite(time)) {
    throw new TypeError('time must be a finite number');
  }
}

function unitProgress(value) {
  return Math.min(1, Math.max(0, Number(value.toFixed(10))));
}

export function clampTime(time) {
  validateTime(time);
  return Math.min(TOTAL, Math.max(0, time));
}

export function nextStep(time) {
  return clampTime(Math.floor(clampTime(time)) + 1);
}

export function previousStep(time) {
  return clampTime(Math.ceil(clampTime(time)) - 1);
}

function chapterAt(time) {
  if (time === TOTAL) return CHAPTERS[CHAPTERS.length - 1];
  return CHAPTERS.find(({ start, end }) => time >= start && time < end);
}

function deriveTranscription(time) {
  if (time < TRANSCRIPTION_START) {
    return { index: null, phase: 0, status: 'idle', completed: 0 };
  }
  if (time >= TRANSCRIPTION_END) {
    return { index: null, phase: 1, status: 'complete', completed: RNA.length };
  }

  const local = time - TRANSCRIPTION_START;
  const completed = Math.floor(local);
  const index = completed < RNA.length ? completed : null;
  return {
    index,
    phase: unitProgress(local - completed),
    status: index === null ? 'complete' : 'synthesizing',
    completed,
  };
}

function translationInactive() {
  return {
    mode: null,
    codonIndex: null,
    subphase: null,
    phase: 0,
    pCodonIndex: null,
    aCodonIndex: null,
    chainSite: null,
    ribosomeCodon: null,
  };
}

function translationFrame({
  mode,
  codonIndex = null,
  subphase,
  phase = 0,
  pCodonIndex = null,
  aCodonIndex = null,
  chainSite,
  ribosomeCodon = null,
  peptideCount = 0,
}) {
  return {
    translation: {
      mode,
      codonIndex,
      subphase,
      phase: unitProgress(phase),
      pCodonIndex,
      aCodonIndex,
      chainSite,
      ribosomeCodon: ribosomeCodon === null ? null : Number(ribosomeCodon.toFixed(10)),
    },
    peptideCount,
  };
}

function deriveTranslation(local) {
  if (local < 1) {
    return translationFrame({ mode: 'scan', subphase: 'scanning', phase: local, chainSite: 'none' });
  }

  if (local < 2) {
    const phase = local - 1;
    return translationFrame({
      mode: 'initiate',
      codonIndex: 0,
      subphase: 'initiator-entry',
      phase,
      pCodonIndex: 0,
      chainSite: phase >= 0 ? 'P' : 'none',
      ribosomeCodon: 0,
      peptideCount: phase >= 0.7 ? 1 : 0,
    });
  }

  if (local < 3) {
    return translationFrame({
      mode: 'assemble',
      codonIndex: 1,
      subphase: 'assembly',
      phase: local - 2,
      pCodonIndex: 0,
      aCodonIndex: 1,
      chainSite: 'P',
      ribosomeCodon: 0,
      peptideCount: 1,
    });
  }

  if (local < 19) {
    const roundIndex = Math.floor((local - 3) / 4);
    const codonIndex = roundIndex + 1;
    const inRound = (local - 3) % 4;
    const phaseIndex = Math.floor(inRound);
    const phase = unitProgress(inRound - phaseIndex);
    const subphases = ['enter', 'pair', 'bond', 'translocate'];
    const subphase = subphases[phaseIndex];
    let peptideCount = Math.min(5, 1 + Math.max(0, roundIndex));
    const bondPassed = subphase === 'bond' && phase >= 0.7;
    if (subphase === 'translocate') peptideCount = Math.min(5, peptideCount + 1);
    else if (bondPassed) peptideCount = Math.min(5, peptideCount + 1);

    let ribosomeCodon = codonIndex - 1;
    if (subphase === 'translocate') ribosomeCodon += phase;
    const chainSite = subphase === 'bond'
      ? (bondPassed ? 'A' : 'P')
      : subphase === 'translocate'
        ? (phase >= 0.7 ? 'P' : 'A')
        : 'P';

    return translationFrame({
      mode: 'elongate',
      codonIndex,
      subphase,
      phase,
      pCodonIndex: codonIndex - 1,
      aCodonIndex: codonIndex,
      chainSite,
      ribosomeCodon,
      peptideCount,
    });
  }

  if (local < 20) {
    return translationFrame({
      mode: 'stop',
      codonIndex: 5,
      subphase: 'recognition',
      phase: local - 19,
      pCodonIndex: 4,
      aCodonIndex: 5,
      chainSite: 'P',
      ribosomeCodon: 4,
      peptideCount: 5,
    });
  }

  if (local < 21) {
    return translationFrame({
      mode: 'release-factor',
      codonIndex: 5,
      subphase: 'binding',
      phase: local - 20,
      pCodonIndex: 4,
      aCodonIndex: 5,
      chainSite: 'P',
      ribosomeCodon: 4,
      peptideCount: 5,
    });
  }

  if (local < 22) {
    const phase = local - 21;
    const released = phase >= 0.7;
    return translationFrame({
      mode: 'release',
      codonIndex: 5,
      subphase: 'peptide-release',
      phase,
      pCodonIndex: released ? null : 4,
      aCodonIndex: released ? null : 5,
      chainSite: released ? 'released' : 'P',
      ribosomeCodon: 4,
      peptideCount: 5,
    });
  }

  if (local < 23) {
    return translationFrame({
      mode: 'disassemble',
      subphase: 'disassembly',
      phase: local - 22,
      chainSite: 'released',
      peptideCount: 5,
    });
  }

  return translationFrame({
    mode: 'complete',
    subphase: 'complete',
    phase: local - 23,
    chainSite: 'released',
    peptideCount: 5,
  });
}

function chapterPhase(chapter, transcription, translation) {
  switch (chapter.key) {
    case 'dna': return 'dna';
    case 'transcription': return transcription.status;
    case 'export': return 'exporting';
    case 'translation': return translation.mode;
    case 'comparison': return 'complete';
    default: throw new RangeError(`Unknown chapter: ${chapter.key}`);
  }
}

export function derive(inputTime) {
  const time = clampTime(inputTime);
  const chapter = chapterAt(time);
  const transcription = deriveTranscription(time);
  const chapterStep = Math.floor(time - chapter.start);
  const step = Math.min(chapter.end - chapter.start - 1, chapterStep);
  let rnaCount = 0;
  let peptideCount = 0;
  let translation = translationInactive();
  let activeIndices = [];

  if (chapter.key === 'transcription') {
    const fraction = unitProgress((time - TRANSCRIPTION_START) - Math.floor(time - TRANSCRIPTION_START));
    const newlyAdded = transcription.index !== null && fraction >= 0.7 ? 1 : 0;
    rnaCount = Math.min(RNA.length, transcription.completed + newlyAdded);
    if (transcription.index !== null) activeIndices = [transcription.index];
  } else if (chapter.key === 'export') {
    rnaCount = RNA.length;
  } else if (chapter.key === 'translation') {
    rnaCount = RNA.length;
    const local = time - TRANSLATION_START;
    ({ translation, peptideCount } = deriveTranslation(local));
    if (translation.codonIndex !== null) {
      const codon = CODONS[translation.codonIndex];
      if (codon && (translation.mode !== 'release' || translation.chainSite !== 'released')) {
        activeIndices = indicesForCodon(translation.codonIndex);
      }
    }
  } else if (chapter.key === 'comparison') {
    rnaCount = RNA.length;
    peptideCount = 5;
  }

  return {
    time,
    chapter,
    step,
    phase: chapterPhase(chapter, transcription, translation),
    rnaCount,
    peptideCount,
    activeIndices,
    transcription,
    translation,
  };
}
