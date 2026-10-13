// Shared schematic coordinates: the three functional regions stay with the
// ribosome while tRNAs enter and move between them. Not atom-coordinate data.
export const SITE_SPACING = 1.05;
export const TRANSLATION_SITES = Object.freeze([
  Object.freeze({ key: 'E', x: -SITE_SPACING, y: .42, z: .32, description: '离开区域 · 拓展' }),
  Object.freeze({ key: 'P', x: 0, y: .42, z: .32, description: '载链区域 · 拓展' }),
  Object.freeze({ key: 'A', x: SITE_SPACING, y: .42, z: .32, description: '进入区域 · 拓展' }),
]);
