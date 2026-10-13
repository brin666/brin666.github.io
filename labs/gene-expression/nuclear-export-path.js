// Shared spatial frame for the teaching pore and its single RNA passage.
// Timing/curvature are presentation choices, not measured export kinetics.
export const EXPORT_FRAME = Object.freeze({ x: 0, y: 0, z: .13, lumenRadius: .45, halfDepth: .36 });
const smooth = value => { const t = Math.max(0, Math.min(1, value)); return t*t*(3-2*t); };
export function exportProgress(time) { return smooth((time-35.2)/2.6); }
export function envelopePositionX(time) {
  return 7*(1-smooth((time-34)/1.2))-11*smooth((time-38)/1.5);
}
export function sampleExportPoint(index, time, point, direction) {
  const x = -5.25 + (29-index)*.145 + 6.45*exportProgress(time);
  // The collar segment is straight and locked to the same frame as the pore.
  // The base sits above its backbone, so center the whole nucleotide in the lumen.
  const bend = smooth((Math.abs(x)-.9)/1.85);
  point.set(x, EXPORT_FRAME.y-.12-bend*(.48+.075*Math.sin(x*.9)), EXPORT_FRAME.z+.09*bend*Math.sin(x*.7));
  direction?.set(0,1,0);
  return point;
}
