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

  kind: EpisodeKind;

  characterIds: string[];
}


export const STORY_EPISODES: StoryEpisode[] = [

  // =========================================================
  // 1 - DIE MAGISCHE SCHRIFTROLLE AKT 0
  // Spielt 2020 und steht deshalb bewusst ganz am Anfang.
  // =========================================================

  {
    id: 'dms-akt-0',

    title: 'Die magische Schriftrolle - Akt 0',

    thumbnail: '/episodes/dms-akt-0.png',

    chronology: 1,

    kind: 'episode',

    characterIds: [
      'xyros',
      'rick',
      'ben',
      'xoph'
    ]
  },


  // =========================================================
  // ALTE STORYHUB-VIDEOS
  // =========================================================

  {
    id: 'haengender-alman-spielplatz',

    title: 'der hängende alman am Spielplatz 😂😂😂',

    thumbnail:
      '/episodes/haengender-alman-spielplatz.png',

    chronology: 2,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas'
    ]
  },


  {
    id: '12-minuten',

    title:
      'er hat es einfach unglaublich 12 minuten geschafft 😳😳',

    thumbnail:
      '/episodes/12-minuten.png',

    chronology: 3,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas'
    ]
  },


  {
    id: 'haengender-alman-rekord',

    title:
      'Der hängende Alman ist zurück mit einem neuen Rekord! 😳 (KRASS)',

    thumbnail:
      '/episodes/haengender-alman-rekord.png',

    chronology: 4,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas'
    ]
  },


  {
    id: 'x-eyes-ft-philip',

    title:
      'X-eyes ft. Philip| official musicvideo (instrumental)',

    thumbnail:
      '/episodes/x-eyes-ft-philip.png',

    chronology: 5,

    kind: 'musicvideo',

    characterIds: [
      'crackyman',
      'niklas'
    ]
  },


  {
    id: 'energy-drink-spielplatz',

    title:
      'energy drink + spielplatz = dieses video... 😂',

    thumbnail:
      '/episodes/energy-drink-spielplatz.png',

    chronology: 6,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas',
      'dealer'
    ]
  },


  // =========================================================
  // DER CRACKYMAN
  // =========================================================

  {
    id: 'crackyman-part-1',

    title:
      'Der Crackyman (Part 1)',

    thumbnail:
      '/episodes/crackyman-part-1.png',

    chronology: 7,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas'
    ]
  },


  {
    id: 'crackyman-part-2',

    title:
      'Der Crackyman (Part 2)',

    thumbnail:
      '/episodes/crackyman-part-2.png',

    chronology: 8,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas',
      'xyros'
    ]
  },


  {
    id: 'x-king-ft-crackyman',

    title:
      'The X-King ft. Crackyman (Offizielles Musikvideo) - Halloween Special',

    thumbnail:
      '/episodes/x-king-ft-crackyman.png',

    chronology: 9,

    kind: 'musicvideo',

    characterIds: [
      'crackyman',
      'xyros'
    ]
  },


  {
    id: 'crackyman-part-3',

    title:
      'Der Crackyman (Part 3)',

    thumbnail:
      '/episodes/crackyman-part-3.png',

    chronology: 10,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'xyros',
      'niklas'
    ]
  },


  // =========================================================
  // HAPPY X
  // =========================================================

  {
    id: 'happy-x',

    title:
      'Happy X (ft. @mafakxi)',

    thumbnail:
      '/episodes/happy-x.png',

    chronology: 11,

    kind: 'musicvideo',

    characterIds: [
      'xyros',
      'mafakxi',
      'larry'
    ]
  },


  // =========================================================
  // DIE MAGISCHE SCHRIFTROLLE
  // =========================================================

  {
    id: 'dms-trailer',

    title:
      'Die magische Schriftrolle - Trailer',

    thumbnail:
      '/episodes/dms-trailer.png',

    chronology: 12,

    kind: 'trailer',

    characterIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'slim-schlappen'
    ]
  },


  {
    id: 'dms-akt-1',

    title:
      'Die magische Schriftrolle - Akt 1',

    thumbnail:
      '/episodes/dms-akt-1.png',

    chronology: 13,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas',
      'xyros',
      'slim-schlappen',
    ]
  },


  {
    id: 'dms-akt-2',

    title:
      'Die magische Schriftrolle - Akt 2',

    thumbnail:
      '/episodes/dms-akt-2.png',

    chronology: 14,

    kind: 'episode',

    characterIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'ski-augli',
      'whackyman'
    ]
  },


  // =========================================================
  // WOLF OF WALDSTREET
  // =========================================================

  {
    id: 'wolf-of-waldstreet',

    title:
      'Der Wolf of Waldstreet (Märchen in Asozial)',

    thumbnail:
      'episodes/wolf-of-waldstreet.png',

    chronology: 15,

    kind: 'special',

    characterIds: [
      'wolf-of-waldstreet',
      'gabba-gandalf',
      'hermiminone'
    ]
  },

  {
    id: 'dms-akt-3',

    title:
      'Die magische Schriftrolle - Akt 3',

    thumbnail:
      '/episodes/dms-akt-3.png',

    chronology: 15,

    kind: 'episode',

    characterIds: [
      'xyros',
      'crackyman',
      'niklas',
      'rick',
      'melissa',
      'corra',
      'gabba-gandalf'
    ]
  }

];