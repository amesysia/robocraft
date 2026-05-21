// Karakter üzerindeki eşyaların görsel (piksel) yansımaları
// Renk paleti eşleştirmeleri
const P = {
  // Materyaller
  W: '#8b5a2b', // Ahşap
  S: '#9ca3af', // Taş
  I: '#e5e7eb', // Demir
  D: '#22d3ee', // Elmas
  G: '#fbbf24', // Altın
  N: '#4b5563', // Netherit
  L: '#a0522d', // Deri
  
  // Gölgeler ve detaylar
  D_W: '#5c3a21',
  D_I: '#9ca3af',
  D_D: '#0891b2',
  D_G: '#b45309',
  D_N: '#374151',
  K: '#111827', // Siyah/Kenar
  T: 'transparent'
};

// 16x16 Kılıç Şablonu (Sağ ele oturacak şekilde)
const generateSword = (main, shadow) => [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, shadow, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.K, P.K, P.K, P.K, P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.W, P.D_W, P.K, P.W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, main, P.K, P.K, P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.K, P.T, P.T, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T]
];

// 8x8 Kask Şablonu (Başa oturacak şekilde)
const generateHelmet = (main, shadow) => [
  [main, main, main, main, main, main, main, main],
  [main, main, shadow, main, main, shadow, main, main],
  [main, shadow, shadow, shadow, shadow, shadow, shadow, main],
  [main, shadow, P.T, P.T, P.T, P.T, shadow, main],
  [main, shadow, P.T, P.T, P.T, P.T, shadow, main],
  [main, shadow, P.T, P.T, P.T, P.T, shadow, main],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T]
];

// Göğüs Zırhı Şablonu (Gövde kısmını kaplar)
const generateChestplate = (main, shadow) => [
  [P.T, P.T, main, main, main, main, P.T, P.T],
  [P.T, main, main, shadow, shadow, main, main, P.T],
  [main, main, shadow, shadow, shadow, shadow, main, main],
  [main, main, shadow, shadow, shadow, shadow, main, main],
  [main, main, main, shadow, shadow, main, main, main],
  [main, main, main, main, main, main, main, main],
  [main, main, shadow, shadow, shadow, shadow, main, main],
  [main, main, shadow, shadow, shadow, shadow, main, main],
  [P.T, main, main, main, main, main, main, P.T],
  [P.T, P.T, main, shadow, shadow, main, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T]
];

// 16x16 Kazma Şablonu
const generatePickaxe = (main, shadow) => [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.K, P.K, P.K, P.K, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, main, main, main, main, main, shadow, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, main, main, main, shadow, shadow, shadow, shadow, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.K, main, shadow, P.K, P.K, P.K, P.K, P.K, shadow, shadow, P.K, P.T, P.T],
  [P.T, P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.K, shadow, P.K, P.T, P.T, P.T],
  [P.T, P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.K, P.W, P.K, P.T, P.T, P.T, P.T],
  [P.K, main, shadow, P.K, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T],
  [P.K, shadow, P.K, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.K, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.W, P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
];

// 16x16 Kürek Şablonu
const generateShovel = (main, shadow) => [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, main, shadow, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, main, main, shadow, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, main, main, shadow, shadow, P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, main, main, shadow, shadow, shadow, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, shadow, shadow, shadow, shadow, P.K, P.K, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, shadow, P.K, P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, P.W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T]
];

// 16x16 Olta Şablonu
const fishingRod = [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.K],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.W, P.K, '#e5e7eb'],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.W, P.K, P.K, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.W, P.W, P.K, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.T, P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.K, P.K, P.K, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T],
  [P.K, P.W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K],
  [P.K, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, '#e5e7eb'],
  [P.T, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T]
];

// 16x16 Yay (Bow) Şablonu
const bow = [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.W, P.W, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.W, P.D_W, P.K, P.K, '#e5e7eb', P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, P.K, P.W, P.W, P.K, P.K, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.T, P.K, P.W, P.W, P.K, P.K, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.K, P.W, P.W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.K, P.W, P.W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.K, P.W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.K, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.K, P.D_W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.K, P.D_W, P.D_W, P.K, P.T, P.T, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.T, P.K, P.D_W, P.D_W, P.K, P.K, P.T, P.T, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.T, P.T, P.K, P.K, P.D_W, P.D_W, P.K, P.K, P.T, P.T, '#e5e7eb', P.T, P.K, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.D_W, P.D_W, P.K, P.K, '#e5e7eb', P.K, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.D_W, P.D_W, P.K, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.K, P.T, P.T, P.T],
];

// 16x16 Trident Şablonu
const trident = [
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.D, P.D, P.K, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.D, P.D, P.D, P.K, P.D],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.K, P.D, P.I, P.D, P.K, P.D, P.K],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.D, P.I, P.K, P.D, P.K, P.T, P.K, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.T, P.K, P.D, P.I, P.K, P.T, P.K, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.T, P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.T, P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.T, P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.T, P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.D, P.I, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.D, P.D, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.D, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.D, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.K, P.D, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
  [P.T, P.K, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
];

// Tüm item görselleri
export const ITEM_VISUALS = {
  // Silahlar
  wooden_sword: { type: 'sword', pixels: generateSword(P.W, P.D_W) },
  stone_sword: { type: 'sword', pixels: generateSword(P.S, P.D_I) },
  iron_sword: { type: 'sword', pixels: generateSword(P.I, P.D_I) },
  diamond_sword: { type: 'sword', pixels: generateSword(P.D, P.D_D) },
  netherite_sword: { type: 'sword', pixels: generateSword(P.N, P.D_N) },
  bow: { type: 'bow', pixels: bow },
  trident: { type: 'sword', pixels: trident },

  // Araçlar
  wooden_pickaxe: { type: 'tool', pixels: generatePickaxe(P.W, P.D_W) },
  iron_pickaxe: { type: 'tool', pixels: generatePickaxe(P.I, P.D_I) },
  diamond_pickaxe: { type: 'tool', pixels: generatePickaxe(P.D, P.D_D) },
  fishing_rod: { type: 'tool', pixels: fishingRod },
  shovel: { type: 'tool', pixels: generateShovel(P.I, P.D_I) },
  
  // Zırhlar (Baş)
  leather_helmet: { type: 'helmet', pixels: generateHelmet(P.L, '#8b4513') },
  iron_helmet: { type: 'helmet', pixels: generateHelmet(P.I, P.D_I) },
  diamond_helmet: { type: 'helmet', pixels: generateHelmet(P.D, P.D_D) },

  // Zırhlar (Gövde)
  iron_chestplate: { type: 'chestplate', pixels: generateChestplate(P.I, P.D_I) },
  diamond_chestplate: { type: 'chestplate', pixels: generateChestplate(P.D, P.D_D) },
  
  // Özel
  elytra: {
    type: 'wings',
    pixels: [
      // Basit elytra görünümü (Omuzlardan sarkan kanatlar)
      [P.T, P.S, P.T, P.T, P.T, P.T, P.S, P.T],
      [P.S, P.I, P.T, P.T, P.T, P.T, P.I, P.S],
      [P.S, P.I, P.T, P.T, P.T, P.T, P.I, P.S],
      [P.S, P.I, P.T, P.T, P.T, P.T, P.I, P.S],
      [P.S, P.D_I, P.T, P.T, P.T, P.T, P.D_I, P.S],
      [P.T, P.D_I, P.T, P.T, P.T, P.T, P.D_I, P.T],
      [P.T, P.D_I, P.T, P.T, P.T, P.T, P.D_I, P.T],
      [P.T, P.T, P.T, P.T, P.T, P.T, P.T, P.T],
    ]
  }
};
