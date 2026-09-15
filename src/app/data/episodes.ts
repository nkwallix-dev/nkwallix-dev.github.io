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

  // Hier dürfen Charakter- UND Artefakt-IDs rein.
  entryIds: string[];
}

export const STORY_EPISODES: StoryEpisode[] = [
  {
    id: 'dms-akt-0',
    title: 'Die magische Schriftrolle - Akt 0',
    thumbnail: '/episodes/dms-akt-0.png',
    chronology: 1,
    kind: 'episode',
    entryIds: [
      'xyros',
      'rick',
      'ben',
      'xoph',
      'magische-schriftrolle',
      'xyros-altes-zepter',
      'xyros-neues-zepter'
    ]
  },
  {
    id: 'haengender-alman-spielplatz',
    title: 'der hängende alman am Spielplatz 😂😂😂',
    thumbnail: '/episodes/haengender-alman-spielplatz.png',
    chronology: 2,
    kind: 'episode',
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
    entryIds: [
      'crackyman',
      'niklas',
      'xyros'
    ]
  },
  {
    id: 'x-king-ft-crackyman',
    title: 'The X-King ft. Crackyman (Offizielles Musikvideo) - Halloween Special',
    thumbnail: '/episodes/x-king-ft-crackyman.png',
    chronology: 9,
    kind: 'musicvideo',
    entryIds: [
      'crackyman',
      'xyros'
    ]
  },
  {
    id: 'crackyman-part-3',
    title: 'Der Crackyman (Part 3)',
    thumbnail: '/episodes/crackyman-part-3.png',
    chronology: 10,
    kind: 'episode',
    entryIds: [
      'crackyman',
      'xyros',
      'niklas',
      'magische-schriftrolle'
    ]
  },
  {
    id: 'happy-x',
    title: 'Happy X (ft. @mafakxi)',
    thumbnail: '/episodes/happy-x.png',
    chronology: 11,
    kind: 'musicvideo',
    entryIds: [
      'xyros',
      'mafakxi',
      'larry'
    ]
  },
  {
    id: 'dms-trailer',
    title: 'Die magische Schriftrolle - Trailer',
    thumbnail: '/episodes/dms-trailer.png',
    chronology: 12,
    kind: 'trailer',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'slim-schlappen',
      'magische-schriftrolle'
    ]
  },
  {
    id: 'dms-akt-1',
    title: 'Die magische Schriftrolle - Akt 1',
    thumbnail: '/episodes/dms-akt-1.png',
    chronology: 13,
    kind: 'episode',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'slim-schlappen',
      'magische-schriftrolle',
      'xyros-altes-zepter',
      'xyros-neues-zepter'
    ]
  },
  {
    id: 'dms-akt-2',
    title: 'Die magische Schriftrolle - Akt 2',
    thumbnail: '/episodes/dms-akt-2.png',
    chronology: 14,
    kind: 'episode',
    entryIds: [
      'crackyman',
      'niklas',
      'xyros',
      'dealer',
      'ski-augli',
      'whackyman',
      'magische-schriftrolle',
      'xyros-neues-zepter'
    ]
  },
  {
    id: 'wolf-of-waldstreet',
    title: 'Der Wolf of Waldstreet (Märchen in Asozial)',
    thumbnail: '/episodes/wolf-of-waldstreet.png',
    chronology: 15,
    kind: 'special',
    entryIds: [
      'wolf-of-waldstreet',
      'gabba-gandalf',
      'hermiminone',
      'hermiminones-zauberstab'
    ]
  },
  {
    id: 'dms-akt-3',
    title: 'Die magische Schriftrolle - Akt 3',
    thumbnail: '/episodes/dms-akt-3.png',
    chronology: 16,
    kind: 'episode',
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
      'hermiminones-zauberstab'

      // Falls sie in Akt 3 wirklich vorkommen, einfach ergänzen:
      // 'xyros-neues-zepter',
      // 'larry'
    ]
  }
];
