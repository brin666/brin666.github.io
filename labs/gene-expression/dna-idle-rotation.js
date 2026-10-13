// Deterministic long-axis presentation rotation, not DNA reaction dynamics.
// The host applies one common angle to the closed helix, supplies elapsed time,
// and keeps its local opened-bubble geometry independent of this controller.
const TAU = Math.PI * 2;
const wrapped = angle => ((angle % TAU) + TAU) % TAU;

export function createDnaIdleRotation({ period = 18, settleDuration = 1.2, reducedMotion = false } = {}) {
  if (!Number.isFinite(period) || period <= 0) throw new RangeError('DNA rotation period must be positive');
  if (!Number.isFinite(settleDuration) || settleDuration <= 0) throw new RangeError('DNA settle duration must be positive');
  const duration = Math.min(3.7, settleDuration), disabled = Boolean(reducedMotion);
  const idleOmega = disabled ? 0 : TAU / period;
  let angle = 0, idleBase = 0, idleSeconds = 0, compensation = 0, playback = null;

  function updateIdle(deltaSeconds) {
    if (disabled) return 0;
    if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return angle;
    if (playback) {
      idleBase = angle; idleSeconds = 0; compensation = 0; playback = null;
    }
    // Sum supplied time with compensation, then evaluate angle directly.
    // Never integrate angular increments frame by frame.
    const increment = deltaSeconds - compensation;
    const next = idleSeconds + increment;
    compensation = (next - idleSeconds) - increment; idleSeconds = next;
    angle = idleBase + idleOmega * idleSeconds;
    return angle;
  }
  function beginPlayback({ rate = 1 / 1.65 } = {}) {
    if (!Number.isFinite(rate) || rate <= 0) throw new RangeError('DNA playback rate must be positive');
    const initialOmega = idleOmega / rate;
    playback = {
      initialAngle: angle, rate, initialOmega, duration, elapsed: 0,
      targetAngle: angle + initialOmega * duration / 2,
      angularVelocity: initialOmega,
    };
    return angle;
  }
  function samplePlayback(elapsedFromPlay) {
    if (disabled) return 0;
    if (!playback) return angle;
    const elapsed = Number.isFinite(elapsedFromPlay) ? Math.max(0, elapsedFromPlay) : 0;
    const u = Math.min(1, elapsed / playback.duration);
    // v(u) = w0 * (1 - 3u² + 2u³), monotonically decreasing on [0,1].
    // Its integral makes angle and velocity continuous, with acceleration zero
    // at both ends. Sampling/reverse seeking never changes the captured origin.
    const remaining = 1 - u;
    const integral = u <= .5 ? u - u * u * u + .5 * u * u * u * u
      : .5 - remaining * remaining * remaining * (1 - .5 * remaining);
    angle = u === 1 ? playback.targetAngle : playback.initialAngle + playback.initialOmega * playback.duration * integral;
    playback.elapsed = elapsed;
    playback.angularVelocity = playback.initialOmega * remaining * remaining * (1 + 2 * u);
    return angle;
  }
  function reset() {
    angle = 0; idleBase = 0; idleSeconds = 0; compensation = 0; playback = null;
    return 0;
  }
  function inspect() {
    return {
      mode: playback ? 'playback' : 'idle', angle, wrappedAngle: wrapped(angle),
      period, idleOmega, idleSeconds, settleDuration: duration, reducedMotion: disabled,
      realAngularVelocity: playback ? playback.angularVelocity * playback.rate : idleOmega,
      playback: playback ? { ...playback } : null,
      scientificScope: '双螺旋长轴教学展示自转；不代表DNA真实反应如此旋转',
    };
  }
  return { updateIdle, samplePlayback, beginPlayback, reset, inspect };
}
