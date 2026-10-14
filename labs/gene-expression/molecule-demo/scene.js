import * as THREE from '../vendor/three.module.js'
import { OrbitControls } from '../vendor/OrbitControls.js'
import { GLTFLoader } from '../vendor/addons/loaders/GLTFLoader.js'
import { createExhibitMaterial, createExhibitEnvironment } from '../exhibit-surface.js'
import { createPolymeraseView } from '../pilot/polymerase-view.js'
import { createExhibitBase } from '../nucleic-exhibit.js'

// This entry owns all its scenes, materials and controls. Shared factories are
// called with explicit overrides; the existing lesson and entrance stay intact.
export const SUBUNITS = [
  ['#9387EA', '主要亚基'], ['#42BFAA', '主要亚基'], ['#F0AC65', '组成亚基'],
  ['#EB7997', '组成亚基'], ['#73AFDD', '组成亚基'], ['#C9AAE7', '组成亚基'],
  ['#D6BB65', '组成亚基'], ['#71C7BE', '组成亚基'], ['#EAA882', '组成亚基'],
  ['#A5B87C', '组成亚基'], ['#8CA9E1', '组成亚基'], ['#D995C5', '组成亚基'],
].map(([color, role], index) => ({ id: `RPB${index + 1}`, name: `Rpb${index + 1}`, color, role }))

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z)
const clamp = THREE.MathUtils.clamp
const ease = t => t * t * (3 - 2 * t)
const BASE_COLORS = { A: '#EDCE78', T: '#A6BDDE', U: '#DB9BC1', C: '#E99B80', G: '#87C7A5' }
const svgNS = 'http://www.w3.org/2000/svg'

export function createPolymeraseDemo({ host, onReady = () => {}, onSelect = () => {}, onError = () => {} } = {}) {
  if (!host?.append) throw new TypeError('缺少分子展台容器')
  const media = matchMedia('(prefers-reduced-motion: reduce)')
  let disposed = false, loaded = false, step = 0, selected = null
  let cutaway = false, exploded = false, autoRotate = false, dirty = true
  let moving = null, time = 0, previousStamp = null, frameId = 0, dragging = false
  let width = 1, height = 1, explodeAmount = 0, hasPointerMoved = false, pointerStart = null
  let environment = null, bounds = null, center = V(), homeDistance = 6
  let renderer
  const resources = new Set(), parts = [], labels = [], baseRecords = [], pairRecords = [], pendingResources = new Set()
  const homeDirection = V(-.72, .20, 1).normalize(), workDirection = V(.20, .14, 1).normalize()
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#11272A')
  const root = new THREE.Group(), body = new THREE.Group(), chemistry = new THREE.Group()
  scene.add(root); root.add(body); body.add(chemistry)
  const camera = new THREE.PerspectiveCamera(34, 1, .05, 80)
  camera.position.set(1.6, .8, 6)
  const owned = value => { resources.add(value); return value }
  const invalidate = () => { dirty = true }
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2()
  const screen = V()
  const cutWindow = createPolymeraseView({ center: V(.04, .22, .80), radii: new THREE.Vector2(.88, .82), depthOffset: -.24 })
  cutWindow.setEnabled(false)

  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
  } catch (error) {
    const ready = Promise.reject(error); ready.catch(onError)
    return { ready, dispose() {}, inspect: () => ({ loaded: false, error: error.message }) }
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.65))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.03
  renderer.domElement.className = 'molecule-canvas'
  renderer.domElement.setAttribute('aria-label', 'RNA 聚合酶三维模型，可拖动旋转与缩放')
  renderer.domElement.setAttribute('role', 'img')
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:none'
  host.append(renderer.domElement)

  const overlay = document.createElement('div')
  overlay.className = 'molecule-labels'
  overlay.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden'
  const leaders = document.createElementNS(svgNS, 'svg')
  leaders.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none'
  leaders.setAttribute('aria-hidden', 'true')
  overlay.append(leaders); host.append(overlay)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true; controls.dampingFactor = .085
  controls.enablePan = false; controls.minDistance = 2.2; controls.maxDistance = 15
  controls.minPolarAngle = .2; controls.maxPolarAngle = Math.PI - .2
  controls.rotateSpeed = .58; controls.zoomSpeed = .72
  controls.autoRotateSpeed = .34
  controls.addEventListener('change', invalidate)
  controls.addEventListener('start', () => { dragging = true; moving = null; invalidate() })
  controls.addEventListener('end', () => { dragging = false; invalidate() })

  scene.add(new THREE.HemisphereLight('#D1ECE6', '#152026', .68))
  for (const [color, intensity, position] of [
    ['#FFF2D8', 2.8, [-3, 5, 6]], ['#A2DDF0', 1.05, [4, 1.5, -3.5]],
    ['#C4DAD8', .45, [-4, -1, 2]], ['#E5C9FF', .7, [1, 4, -3]],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(...position); scene.add(light)
  }

  function proteinMaterial(index, ghost) {
    return cutWindow.wrap(owned(createExhibitMaterial({
      color: SUBUNITS[index].color, role: 'protein', variant: `demo-rpb-${index}-${ghost}`,
      fieldVariant: `demo-rpb-${index}`, vertexColors: true, surfaceScale: 6.4,
      roughness: .45 + index % 3 * .025, specularIntensity: .50, envMapIntensity: .72,
      ior: 1.38, clearcoat: .12, clearcoatRoughness: .46, sheen: .20,
      sheenColor: '#D9E8F1', sheenRoughness: .64, colorVariation: .62,
      roughnessVariation: .085, relief: .014, normalSlope: .056,
      edgeStrength: .075, rimDirection: V(3, 3, -4), rimTint: new THREE.Color('#C4ECF3'),
      transparent: ghost, depthWrite: !ghost, side: THREE.FrontSide,
    })), ghost)
  }

  function simpleMaterial(color, overrides = {}) {
    return owned(new THREE.MeshPhysicalMaterial({ color, metalness: 0, roughness: .42,
      clearcoat: .16, clearcoatRoughness: .45, ...overrides }))
  }
  function mesh(geometry, material, parent = chemistry) {
    const object = new THREE.Mesh(owned(geometry), material); parent.add(object); return object
  }
  function tube(points, radius, color, parent = chemistry, options = {}) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => p.isVector3 ? p : V(...p)), false, 'catmullrom', .45)
    const mat = color?.isMaterial ? color : simpleMaterial(color, options)
    return mesh(new THREE.TubeGeometry(curve, Math.max(32, points.length * 8), radius, 10, false), mat, parent)
  }
  function sphere(point, radius, color, parent = chemistry) {
    const object = mesh(new THREE.SphereGeometry(radius, 16, 12), simpleMaterial(color), parent)
    object.position.copy(point.isVector3 ? point : V(...point)); return object
  }
  function addLabel(text, anchor, { kind = 'chemistry', part = null, color = '#C8DECE', priority = 5, dx = 22, dy = -24 } = {}) {
    const element = document.createElement(part === null ? 'span' : 'button')
    element.className = 'molecule-tag'; element.textContent = text
    element.style.cssText = `position:absolute;left:0;top:0;white-space:nowrap;pointer-events:${part === null ? 'none' : 'auto'};color:#E8F1E9;background:rgba(12,35,38,.87);border:1px solid ${color}55;border-radius:5px;padding:5px 8px;font:500 11px/1.3 system-ui,sans-serif;box-shadow:0 2px 10px #0002;display:none`
    if (part !== null) {
      element.type = 'button'; element.setAttribute('aria-label', `观察 ${SUBUNITS[part].name}`)
      element.addEventListener('click', () => selectPart(selected === part ? null : part))
    }
    const group = document.createElementNS(svgNS, 'g'), path = document.createElementNS(svgNS, 'path')
    path.setAttribute('fill', 'none'); path.setAttribute('stroke', color); path.setAttribute('opacity', '.65'); path.setAttribute('stroke-width', '.8')
    const dot = document.createElementNS(svgNS, 'circle'); dot.setAttribute('r', '2'); dot.setAttribute('fill', color)
    group.append(path, dot); leaders.append(group); overlay.append(element)
    const label = { text, anchor, kind, part, color, priority, dx, dy, element, group, path, dot }
    labels.push(label); return label
  }

  const templateGroup = new THREE.Group(), rnaGroup = new THREE.Group(), incomingGroup = new THREE.Group()
  chemistry.add(templateGroup, rnaGroup, incomingGroup); chemistry.visible = false
  const activePoint = V(.12, .31, .97)
  let incomingBase, reactionMarker, rnaBackbone, connectorGroup, workLabel

  function basePlate(base, position, up, parent, showLetter = true) {
    const object = mesh(createExhibitBase(base), simpleMaterial(BASE_COLORS[base]), parent)
    // The base geometry's pairing axis is local Z. Put it in the XY observation plane.
    object.rotation.x = up ? -Math.PI / 2 : Math.PI / 2
    object.scale.set(.63, .78, .47); object.position.copy(position)
    if (showLetter) {
      const label = addLabel(base, () => object.localToWorld(V(0, up ? -.07 : .07, 0)), { kind: 'letter', priority: 2, dx: -5, dy: -8 })
      label.owner = object
      Object.assign(label.element.style, { background: 'transparent', border: '0', boxShadow: 'none', padding: '0', color: '#FCF9EE', fontSize: '11px', fontWeight: '650', textShadow: '0 1px 3px #102122' })
    }
    return object
  }
  function buildChemistry() {
    const templatePoints = [[-1.07, -.12, .91], [-.83, -.04, .92], [-.6, .04, .94], [-.36, .045, .94], [-.12, .05, .94], [.12, .05, .94], [.36, .045, .94], [.6, .04, .94], [.87, -.02, .91], [1.12, -.13, .85]]
    tube(templatePoints, .025, '#83BDDE', templateGroup)
    const template = 'TACCGA', rna = 'AUGGCU'
    for (let i = 0; i < 6; i++) {
      const x = (i - 2.5) * .24
      sphere([x, .045, .94], .039, '#9DCEE4', templateGroup)
      const dnaBase = basePlate(template[i], V(x, .19, .94), true, templateGroup)
      const rnaBase = basePlate(rna[i], V(x, .45, .94), false, rnaGroup)
      const sugar = sphere([x, .59, .94], .036, '#F3B779', rnaGroup)
      baseRecords.push({ object: rnaBase, sugar, index: i })
      dnaBase.userData.nucleic = true
    }
    // The 5′ end leaves to the left; the growing 3′ end stays at the right.
    rnaBackbone = tube([[-1.30, 1.06, 1.28], [-1.18, .83, 1.24], [-1.0, .69, 1.12], [-.82, .61, .98], [-.6, .59, .94], [-.36, .59, .94], [-.12, .59, .94], [.12, .59, .94], [.36, .59, .94], [.60, .59, .94]], .027, '#F3AE70', rnaGroup)
    connectorGroup = new THREE.Group(); chemistry.add(connectorGroup)
    const dashMat = simpleMaterial('#EFD491', { emissive: '#C1A35A', emissiveIntensity: .18 })
    for (let i = 0; i < 6; i++) {
      const pairs = new THREE.Group(); connectorGroup.add(pairs); pairRecords.push(pairs)
      for (let dash = 0; dash < (template[i] === 'C' || template[i] === 'G' ? 3 : 2); dash++) {
        const x = (i - 2.5) * .24 + (dash - 1) * .020
        tube([[x, .30, .94], [x, .35, .94]], .005, dashMat, pairs)
      }
    }
    incomingBase = basePlate('G', V(.12, .45, .94), false, incomingGroup, false)
    sphere([.12, .59, .94], .038, '#F3B779', incomingGroup)
    reactionMarker = mesh(new THREE.TorusGeometry(.10, .006, 6, 64), simpleMaterial('#F6CE77', { emissive: '#DEB75B', emissiveIntensity: .28 }), chemistry)
    reactionMarker.position.copy(activePoint); reactionMarker.position.z += .04
    addLabel('DNA 模板链 · 3′ → 5′', () => templateGroup.localToWorld(V(-.76, -.07, .94)), { kind: 'template', color: '#91C7E5', priority: 1, dx: -100, dy: 52 })
    addLabel('新生 RNA · 5′ 端', () => rnaGroup.localToWorld(V(-1.28, 1.04, 1.28)), { kind: 'rna', color: '#F5B176', priority: 1, dx: -100, dy: -26 })
    workLabel = addLabel('配对与连接区域', () => reactionMarker.getWorldPosition(V()), { kind: 'work', color: '#E6C776', priority: 0, dx: 46, dy: -64 })
    addLabel('游离 RNA 核苷酸 · G', () => incomingGroup.localToWorld(V(.12, .59, .94)), { kind: 'incoming', color: '#EDB3D5', priority: 1, dx: 44, dy: -32 })
  }

  function worldPoint(local) { return body.localToWorld(local.clone()) }
  function animateCamera(target, direction, distance) {
    controls.autoRotate = false
    const position = target.clone().addScaledVector(direction, distance)
    if (media.matches) {
      camera.position.copy(position); controls.target.copy(target); controls.update(); moving = null
    } else moving = { fromPosition: camera.position.clone(), fromTarget: controls.target.clone(), position, target, start: performance.now(), duration: 900 }
    invalidate()
  }
  function fitDistance(direction, padding = 1.18) {
    const right = V().crossVectors(camera.up, direction).normalize(), up = V().crossVectors(direction, right).normalize()
    const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), tanX = tanY * camera.aspect
    let distance = 0
    root.updateMatrixWorld(true)
    for (const part of parts) {
      const positions = part.opaque.geometry.attributes.position, stride = Math.max(1, Math.ceil(positions.count / 170))
      for (let i = 0; i < positions.count; i += stride) {
        const p = V().fromBufferAttribute(positions, i).applyMatrix4(part.group.matrixWorld)
        p.addScaledVector(part.offset, (exploded ? 1 : 0) - explodeAmount)
        const depth = p.dot(direction)
        distance = Math.max(distance, Math.abs(p.dot(right)) * padding / tanX + depth, Math.abs(p.dot(up)) * padding / tanY + depth)
      }
    }
    return Math.max(4.7, distance)
  }
  function resetView() {
    if (!loaded) return
    const target = step === 0 ? V() : worldPoint(V(.02, .31, .88))
    const distance = step === 0 ? fitDistance(homeDirection, exploded ? 1.28 : 1.18) : (width < 600 ? 4.8 / Math.min(1, camera.aspect) : 3.9)
    animateCamera(target, step === 0 ? homeDirection : workDirection, distance)
  }
  function updateSelection() {
    labels.forEach(label => { label.anchorAt = 0 })
    for (const part of parts) {
      const amount = selected === null || part.index === selected ? 1 : .42
      for (const mat of [part.opaque.material, part.ghost.material]) {
        mat.color.copy(part.color).multiplyScalar(amount)
        mat.emissive.copy(part.color).multiplyScalar(selected === part.index ? .055 : 0)
        mat.emissiveIntensity = 1
      }
    }
    invalidate()
  }
  function partCameraPose(part) {
    const target = part.group.localToWorld(part.center.clone())
    const direction = target.clone().normalize().multiplyScalar(.62).add(homeDirection).normalize()
    const verticalHalf = THREE.MathUtils.degToRad(camera.fov / 2)
    const horizontalHalf = Math.atan(Math.tan(verticalHalf) * camera.aspect)
    const distance = Math.max(3.7, part.radius / Math.sin(Math.min(verticalHalf, horizontalHalf)) * 1.26)
    return { target, direction, distance }
  }
  function selectPart(index) {
    if (!loaded) return
    selected = index === null ? null : clamp(Math.trunc(index), 0, 11)
    updateSelection(); onSelect(selected)
    if (selected === null) { resetView(); return }
    const part = parts.find(p => p.index === selected)
    const { target, direction, distance } = partCameraPose(part)
    animateCamera(target, direction, distance)
  }
  function setStep(value) {
    step = clamp(Math.trunc(value), 0, 2); selected = null; exploded = false; time = 0
    cutaway = step > 0; chemistry.visible = step > 0; rnaGroup.visible = step > 0
    incomingGroup.visible = step === 1; connectorGroup && (connectorGroup.visible = step > 0)
    for (const record of baseRecords) { record.object.visible = step === 2 || record.index < 3; record.sugar.visible = record.object.visible }
    pairRecords.forEach((object, index) => { object.visible = step === 2 || index < 4 })
    if (rnaBackbone) rnaBackbone.geometry.setDrawRange(0, step === 1 ? Math.floor(rnaBackbone.geometry.index.count * .68 / 60) * 60 : Infinity)
    if (reactionMarker) reactionMarker.position.x = activePoint.x
    if (workLabel) workLabel.element.textContent = step === 2 ? 'RNA 3′ 延伸端' : '配对与连接区域'
    cutWindow.setEnabled(cutaway, { animate: loaded && !media.matches })
    updateSelection(); onSelect(null); resetView(); invalidate()
  }
  function setCutaway(value) {
    cutaway = Boolean(value); cutWindow.setEnabled(cutaway, { animate: !media.matches }); invalidate()
  }
  function setExploded(value) {
    exploded = step === 0 && Boolean(value)
    if (exploded) { cutaway = false; cutWindow.setEnabled(false); selected = null; updateSelection(); onSelect(null) }
    resetView(); invalidate()
  }
  function setAutoRotate(value) { autoRotate = Boolean(value); controls.autoRotate = autoRotate && !media.matches; invalidate() }

  function labelIsVisible(label) {
    if (!loaded || dragging) return false
    if (label.kind === 'part') return step === 0 && (selected === null ? [0, 1, 2].includes(label.part) : selected === label.part)
    if (label.kind === 'letter') return step > 0 && label.anchor && (selected === null)
    if (label.kind === 'rna') return step > 0
    if (label.kind === 'incoming') return step === 1
    return step > 0
  }
  function visiblePartAnchor(label) {
    if (label.anchorAt && performance.now() - label.anchorAt < 160) return label.cachedAnchor
    label.anchorAt = performance.now()
    const part = parts.find(p => p.index === label.part), positions = part.opaque.geometry.attributes.position
    const target = part.group.localToWorld(part.center.clone()).project(camera), candidates = []
    const stride = Math.max(1, Math.ceil(positions.count / 180))
    for (let i = 0; i < positions.count; i += stride) {
      const point = V().fromBufferAttribute(positions, i).applyMatrix4(part.group.matrixWorld), projected = point.clone().project(camera)
      if (Math.abs(projected.x) > .94 || Math.abs(projected.y) > .92 || projected.z < -1 || projected.z > 1) continue
      candidates.push({ point, score: (projected.x - target.x) ** 2 + (projected.y - target.y) ** 2 })
    }
    candidates.sort((a, b) => a.score - b.score)
    for (const { point } of candidates.slice(0, 12)) {
      const direction = point.clone().sub(camera.position), distance = direction.length()
      raycaster.set(camera.position, direction.normalize()); raycaster.far = distance + .03
      const hit = raycaster.intersectObjects(parts.map(p => p.opaque), false)[0]
      if (hit?.object.userData.partIndex === label.part) {
        label.cachedAnchor = hit.point.clone(); raycaster.far = Infinity; return label.cachedAnchor
      }
    }
    raycaster.far = Infinity; label.cachedAnchor = null; return null
  }
  function positionLabels() {
    const placed = [], visibleLabels = labels.filter(labelIsVisible).sort((a, b) => a.priority - b.priority)
    for (const label of labels) { label.element.style.display = 'none'; label.group.style.display = 'none' }
    let namedCount = 0
    for (const label of visibleLabels) {
      if (label.kind === 'letter') {
        if (label.owner) { let object = label.owner, hidden = false; for (; object; object = object.parent) if (!object.visible) hidden = true; if (hidden) continue }
      }
      const anchor = label.kind === 'part' ? visiblePartAnchor(label) : label.anchor()
      if (!anchor) continue
      screen.copy(anchor).project(camera)
      if (screen.z <= -1 || screen.z >= 1 || Math.abs(screen.x) > 1.02 || Math.abs(screen.y) > 1.02) continue
      const ax = (screen.x * .5 + .5) * width, ay = (-screen.y * .5 + .5) * height
      if (label.kind === 'letter') {
        label.element.style.display = 'block'; label.element.style.left = `${ax - 4}px`; label.element.style.top = `${ay - 5}px`
        continue
      }
      if (width < 500 && namedCount >= 3 && label.priority > 0) continue
      label.element.style.display = 'block'
      const w = label.element.offsetWidth, h = label.element.offsetHeight
      const attempts = [[label.dx, label.dy], [label.dx, label.dy - 42], [-w - label.dx, label.dy + 26], [label.dx, label.dy + 52]]
      let best = null
      for (const [dx, dy] of attempts) {
        const x = clamp(ax + dx, 18, width - w - 18), y = clamp(ay + dy, 75, height - h - 84)
        const collision = placed.some(r => x < r.x + r.w + 7 && x + w + 7 > r.x && y < r.y + r.h + 7 && y + h + 7 > r.y)
        if (!collision) { best = { x, y, w, h }; break }
      }
      if (!best) { label.element.style.display = 'none'; continue }
      placed.push(best); namedCount++
      label.element.style.left = `${best.x}px`; label.element.style.top = `${best.y}px`
      const endX = clamp(ax, best.x, best.x + w), endY = clamp(ay, best.y, best.y + h)
      label.path.setAttribute('d', `M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${endX.toFixed(1)} ${endY.toFixed(1)}`)
      label.dot.setAttribute('cx', ax); label.dot.setAttribute('cy', ay); label.group.style.display = 'block'
    }
  }

  function resize() {
    width = Math.max(1, host.clientWidth); height = Math.max(1, host.clientHeight)
    camera.aspect = width / height; camera.updateProjectionMatrix()
    renderer.setSize(width, height, false); leaders.setAttribute('viewBox', `0 0 ${width} ${height}`)
    if (loaded) {
      homeDistance = fitDistance(homeDirection)
      const part = selected === null ? null : parts.find(item => item.index === selected)
      const pose = part ? partCameraPose(part) : {
        target: step === 0 ? V() : worldPoint(V(.02, .31, .88)),
        distance: step === 0 ? homeDistance : (width < 600 ? 4.8 / Math.min(1, camera.aspect) : 3.9),
        direction: step === 0 ? homeDirection : workDirection,
      }
      moving = null; controls.target.copy(pose.target); camera.position.copy(pose.target).addScaledVector(pose.direction, pose.distance); controls.update()
      labels.forEach(label => { label.anchorAt = 0 })
    }
    invalidate()
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize()

  const onPointerDown = event => { pointerStart = [event.clientX, event.clientY]; hasPointerMoved = false }
  const onPointerMove = event => { if (pointerStart && Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 6) hasPointerMoved = true }
  const onPointerUp = event => {
    if (!pointerStart || hasPointerMoved || !loaded || step !== 0) { pointerStart = null; return }
    pointerStart = null
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1)
    raycaster.setFromCamera(pointer, camera)
    const hit = raycaster.intersectObjects(parts.map(p => p.opaque), false).find(item => !cutaway || cutWindow.opacityAt(item.point) > .5)
    selectPart(hit ? hit.object.userData.partIndex : null)
  }
  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  renderer.domElement.addEventListener('pointermove', onPointerMove)
  renderer.domElement.addEventListener('pointerup', onPointerUp)

  function tick(stamp) {
    if (disposed) return
    frameId = requestAnimationFrame(tick)
    const delta = Math.min(.05, Math.max(0, (stamp - (previousStamp ?? stamp)) / 1000)); previousStamp = stamp
    if (document.hidden || !loaded) return
    let changed = false
    if (moving) {
      const t = Math.min(1, (stamp - moving.start) / moving.duration), k = ease(t)
      camera.position.lerpVectors(moving.fromPosition, moving.position, k)
      controls.target.lerpVectors(moving.fromTarget, moving.target, k)
      if (t === 1) { moving = null; controls.autoRotate = autoRotate && !media.matches }
      changed = true
    }
    const goal = exploded ? 1 : 0
    if (Math.abs(explodeAmount - goal) > .0001) {
      explodeAmount = media.matches ? goal : THREE.MathUtils.damp(explodeAmount, goal, 5, delta)
      for (const part of parts) part.group.position.copy(part.offset).multiplyScalar(explodeAmount)
      changed = true
    }
    if (step > 0 && !media.matches && !dragging) {
      time += delta
      const phase = time % 5.2 / 5.2, u = ease(Math.min(1, phase / .68))
      incomingGroup.position.set(.46 * (1 - u), .52 * (1 - u), .10 * (1 - u))
      incomingGroup.scale.setScalar(1 - .13 * Math.sin(Math.PI * u))
      incomingBase.material.emissive.set('#B06E7F'); incomingBase.material.emissiveIntensity = .06 + Math.sin(Math.PI * u) * .14
      reactionMarker.material.emissiveIntensity = .28 + .28 * Math.sin(time * 2.1) ** 2
      if (step === 2) {
        // Existing bases appear in sequence to explain extension; the loop is diagrammatic.
        const count = Math.min(6, 3 + Math.floor(phase * 4.5))
        for (const record of baseRecords) { record.object.visible = record.index < count; record.sugar.visible = record.index < count }
        pairRecords.forEach((object, index) => { object.visible = index < count })
        const total = rnaBackbone.geometry.index.count
        rnaBackbone.geometry.setDrawRange(0, Math.floor(total * (.36 + .64 * count / 6) / 60) * 60)
        reactionMarker.position.x = (count - 1 - 2.5) * .24
      }
      changed = true
    } else if (step > 0 && media.matches) {
      const count = step === 1 ? 3 : 6
      for (const record of baseRecords) { record.object.visible = record.index < count; record.sugar.visible = record.index < count }
      pairRecords.forEach((object, index) => { object.visible = index < (step === 1 ? 4 : 6) })
      if (rnaBackbone) rnaBackbone.geometry.setDrawRange(0, step === 1 ? Math.floor(rnaBackbone.geometry.index.count * .68 / 60) * 60 : Infinity)
      incomingGroup.position.set(0, 0, 0); incomingGroup.scale.setScalar(1)
      reactionMarker.position.x = step === 1 ? activePoint.x : .60
    }
    controls.update()
    if (dirty || changed || cutWindow.active() || controls.autoRotate) {
      scene.updateMatrixWorld(true); cutWindow.update(camera, body.matrixWorld)
      for (const part of parts) part.ghost.visible = cutaway || cutWindow.active()
      renderer.render(scene, camera); positionLabels(); dirty = false
    }
  }
  frameId = requestAnimationFrame(tick)

  const ready = (async () => {
    environment = createExhibitEnvironment(renderer); scene.environment = environment.texture
    const gltf = await new GLTFLoader().loadAsync(new URL('./assets/polymerase-detail.glb', import.meta.url).href)
    gltf.scene.updateMatrixWorld(true)
    gltf.scene.traverse(object => {
      if (!object.isMesh) return
      pendingResources.add(object.geometry)
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) {
        pendingResources.add(mat); for (const value of Object.values(mat)) if (value?.isTexture) pendingResources.add(value)
      }
      const match = object.name.match(/^RNAP_RPB(\d+)$/)
      if (!match || disposed) return
      const index = Number(match[1]) - 1
      const geometry = owned(object.geometry.clone().applyMatrix4(object.matrixWorld))
      geometry.computeBoundingBox(); geometry.computeBoundingSphere()
      const group = new THREE.Group(); body.add(group)
      const opaque = new THREE.Mesh(geometry, proteinMaterial(index, false)), ghost = new THREE.Mesh(geometry, proteinMaterial(index, true))
      opaque.userData.partIndex = index; ghost.renderOrder = 8
      group.add(opaque, ghost)
      const localCenter = geometry.boundingBox.getCenter(V())
      parts.push({ index, group, opaque, ghost, center: localCenter, radius: geometry.boundingSphere.radius, color: new THREE.Color(SUBUNITS[index].color), offset: V() })
    })
    pendingResources.forEach(r => r.dispose()); pendingResources.clear()
    if (disposed) return
    if (parts.length !== 12) throw new Error('分子结构不完整，请重新加载页面')
    parts.sort((a, b) => a.index - b.index)
    bounds = new THREE.Box3().setFromObject(body); center = bounds.getCenter(V()); body.position.copy(center).negate()
    for (const part of parts) {
      const delta = part.center.clone().sub(center)
      part.offset.copy(delta).normalize().multiplyScalar(part.index < 2 ? .35 : .55)
      addLabel(SUBUNITS[part.index].name, () => part.group.localToWorld(part.center.clone()), { kind: 'part', part: part.index, color: SUBUNITS[part.index].color, priority: part.index, dx: part.index === 0 ? -85 : 25, dy: part.index === 1 ? 55 : -40 })
    }
    buildChemistry()
    loaded = true; chemistry.visible = step > 0; rnaGroup.visible = step > 0; resize(); updateSelection()
    const info = { parts: parts.length, triangles: parts.reduce((sum, p) => sum + (p.opaque.geometry.index?.count ?? p.opaque.geometry.attributes.position.count) / 3, 0) }
    host.dataset.modelReady = 'true'; onReady(info); invalidate(); return info
  })().catch(error => { if (!disposed) { host.dataset.modelReady = 'error'; onError(error) }; throw error })

  function dispose() {
    if (disposed) return; disposed = true; cancelAnimationFrame(frameId); resizeObserver.disconnect(); controls.dispose()
    renderer.domElement.removeEventListener('pointerdown', onPointerDown); renderer.domElement.removeEventListener('pointermove', onPointerMove); renderer.domElement.removeEventListener('pointerup', onPointerUp)
    scene.environment = null; environment?.dispose(); resources.forEach(r => r.dispose()); pendingResources.forEach(r => r.dispose())
    scene.clear(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); overlay.remove()
  }
  return { ready, setStep, selectPart, setCutaway, setExploded, setAutoRotate, resetView, dispose,
    inspect: () => ({ loaded, step, selected, cutaway, exploded, autoRotate, parts: parts.length, triangles: renderer.info.render.triangles, draws: renderer.info.render.calls, width, height }) }
}
