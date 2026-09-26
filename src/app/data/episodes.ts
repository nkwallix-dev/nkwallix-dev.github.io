export type EpisodeKind =
  | 'episode'
  | 'musicvideo'
  | 'trailer'
  | 'special';

export interface StoryEpisode {
  id: string;
  title: string;
  thumbnail: string;
  chronology: number;

  // Story-Datum im Format YYYY-MM-DD.
  // Solange du es noch nicht weißt, einfach weglassen.
  storyDate?: string;

  // Echtes Veröffentlichungsdatum des Videos.
  // Wird als Fallback angezeigt, wenn kein Story-Datum eingetragen ist.
  releaseDate?: string;

  // YouTube-Button pro Video:
  // false = Button versteckt
  // true  = Button sichtbar, sofern youtubeUrl gesetzt ist
  youtubeEnabled: boolean;
  youtubeUrl?: string;

  kind: EpisodeKind;

  // true = gehört zur normalen Story-Chronologie.
  // false = taucht standardmäßig NICHT auf, kann aber über den Filter angezeigt werden.
  storyRelevant: boolean;

  // Hier dürfen Charakter- UND Artefakt-IDs rein.
  entryIds: string[];
}

export const STORY_EPISODES: StoryEpisode[] = [
  {
    id: 'dms-akt-0',
    title: 'Die magische Schriftrolle - Akt 0',
    thumbnail: '/episodes/dms-akt-0.png',
    chronology: 1,
    releaseDate: '2026-10-24',
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: false,
    youtubeUrl: '',
    entryIds: [
      'xyros',
      'rick',
      'ben',
      'xoph',
      'magische-schriftrolle',
      'Xyros Zepter'
    ]
  },
  {
    id: 'haengender-alman-spielplatz',
    title: 'der hängende alman am Spielplatz 😂😂😂',
    thumbnail: '/episodes/haengender-alman-spielplatz.png',
    chronology: 2,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/saVKbLWWe4Y?si=McmNPIPba-u15hgY',
    entryIds: [
      'crackyman',
      'niklas'
    ]
  },
  {
    id: '12-minuten',
    title: 'er hat es einfach unglaublich 12 minuten geschafft 😳😳',
    thumbnail: '/episodes/12-minuten.png',
    chronology: 3,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/c_zH88TyJpU?si=7ZGfKnuaL3T59kt2',
    entryIds: [
      'crackyman',
      'niklas'
    ]
  },
  {
    id: 'haengender-alman-rekord',
    title: 'Der hängende Alman ist zurück mit einem neuen Rekord! 😳 (KRASS)',
    thumbnail: '/episodes/haengender-alman-rekord.png',
    chronology: 4,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/8DtSXV9C04I?si=nzdkIpWw6TVi86by',
    entryIds: [
      'crackyman',
      'niklas'
    ]
  },
  {
    id: 'x-eyes-ft-philip',
    title: 'X-eyes ft. Philip| official musicvideo (instrumental)',
    thumbnail: '/episodes/x-eyes-ft-philip.png',
    chronology: 5,
    kind: 'musicvideo',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/OBtNmeT1hSw?si=O0sEun11UmLy1xAn',
    entryIds: [
      'crackyman',
      'niklas'
    ]
  },
  {
    id: 'energy-drink-spielplatz',
    title: 'energy drink + spielplatz = dieses video... 😂',
    thumbnail: '/episodes/energy-drink-spielplatz.png',
    chronology: 6,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/ljgP23MoyKY?si=T3nvB93-o_ghqnat',
    entryIds: [
      'crackyman',
      'niklas',
      'dealer'
    ]
  },
  {
    id: 'crackyman-part-1',
    title: 'Der Crackyman (Part 1)',
    thumbnail: '/episodes/crackyman-part-1.png',
    chronology: 7,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/nHuGRxMFoHc?si=_5AaGbZW4G-1nNto',
    entryIds: [
      'crackyman',
      'niklas'
    ]
  },
  {
    id: 'crackyman-part-2',
    title: 'Der Crackyman (Part 2)',
    thumbnail: '/episodes/crackyman-part-2.png',
    chronology: 8,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/SOcoUZN8G-g?si=wDpqnLVE-ptj2EH4',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'xyros-altes-zepter'
    ]
  },
  {
    id: 'x-king-ft-crackyman',
    title: 'The X-King ft. Crackyman (Offizielles Musikvideo) - Halloween Special',
    thumbnail: '/episodes/x-king-ft-crackyman.png',
    chronology: 9,
    kind: 'musicvideo',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/Y3FILp9tKCY?si=y8azGY88gCOplAqN',
    entryIds: [
      'crackyman',
      'xyros',
      'xyros-altes-zepter'
    ]
  },
  {
    id: 'crackyman-part-3',
    title: 'Der Crackyman (Part 3)',
    thumbnail: '/episodes/crackyman-part-3.png',
    chronology: 10,
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/BsinSZgNe3U?si=BCLtSust4lELOGtH',
    entryIds: [
      'crackyman',
      'xyros',
      'xyros-altes-zepter',
      'niklas'
    ]
  },
  {
    id: 'happy-x',
    title: 'Happy X (ft. @mafakxi)',
    thumbnail: '/episodes/happy-x.png',
    chronology: 11,
    releaseDate: '2023-10-31',
    kind: 'musicvideo',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/Ahwr3xnd_vc?si=N1jisqDSiQwEV6Fs',
    entryIds: [
      'xyros',
      'mafakxi',
      'larry',
      'xyros-altes-zepter'
    ]
  },
  {
    id: 'dms-trailer',
    title: 'Die magische Schriftrolle - Trailer',
    thumbnail: '/episodes/dms-trailer.png',
    chronology: 12,
    releaseDate: '2024-10-22',
    kind: 'trailer',
    storyRelevant: false,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/U_XJTipD484?si=yem4M2Tim3JLjaS2',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'slim-schlappen',
      'magische-schriftrolle',
      'xyros-altes-zepter'
    ]
  },
  {
    id: 'dms-akt-1',
    title: 'Die magische Schriftrolle - Akt 1',
    thumbnail: '/episodes/dms-akt-1.png',
    chronology: 13,
    releaseDate: '2024-10-31',
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/EF0b6Qcy5nI?si=fgg3g3XFdwRfbY4e',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'slim-schlappen',
      'magische-schriftrolle',
      'xyros-altes-zepter',
      'xyros-neues-zepter',
      'amina'
    ]
  },
  {
    id: 'dms-akt-2',
    title: 'Die magische Schriftrolle - Akt 2',
    thumbnail: '/episodes/dms-akt-2.png',
    chronology: 14,
    releaseDate: '2025-10-31',
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/kz5hFDG6RCM?si=_FR8GG6XAd_8hEvX',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'ski-augli',
      'whackyman',
      'magische-schriftrolle',
      'xyros-neues-zepter',
    ]
  },
  {
    id: 'contract-killer',
    title: 'Contract Killer',
    thumbnail: '/episodes/contract-killer.png',
    chronology: 15,
    releaseDate: '2025-11-25',
    kind: 'musicvideo',
    storyRelevant: false,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/3OSe5zLqIWk?si=9GLfX9X1pYGBY9B2',
    entryIds: [
      'niklas',
      'dealer'
    ]
  },
  {
    id: 'wolf-of-waldstreet',
    title: 'Der Wolf of Waldstreet (Märchen in Asozial)',
    thumbnail: '/episodes/wolf-of-waldstreet.png',
    chronology: 16,
    releaseDate: '2026-03-31',
    kind: 'special',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: 'https://youtu.be/PZdc82d5Xus?si=NxT_Y_sRDNLrR95q',
    entryIds: [
      'hornlos-unterentwickelte Kinder',
      'wolf-of-waldstreet',
      'gabba-gandalf',
      'hermiminone',
      'crackyman'
    ]
  },
  {
    id: 'dms-trailer2',
    title: 'Der Anfang vom Ende | Die magische Schriftrolle Akt 0 & Akt 3 - Trailer',
    thumbnail: '/episodes/dms-trailer.png',
    chronology: 17,
    releaseDate: '24.10.2026',
    kind: 'trailer',
    storyRelevant: false,
    youtubeEnabled: false,
    youtubeUrl: '',
    entryIds: [
      'niklas',
      'rick',
      'melissa',
      'xyros',
      'crackyman',
      'ben',
      'xoph',
      'ski-augli',
      'magische-schriftrolle',
      'xyros-altes-zepter'
    ]
  },
  {
    id: 'dms-akt-3',
    title: 'Die magische Schriftrolle - Akt 3',
    thumbnail: '/episodes/dms-akt-3.png',
    chronology: 18,
    releaseDate: '2026-10-31',
    kind: 'episode',
    storyRelevant: true,
    youtubeEnabled: true,
    youtubeUrl: '',
    entryIds: [
      'xyros',
      'crackyman',
      'niklas',
      'rick',
      'melissa',
      'corra',
      'gabba-gandalf',
      'magische-schriftrolle',
      'xyros-neues-zepter',
      'xyros-altes-zepter'
    ]
  }
];
