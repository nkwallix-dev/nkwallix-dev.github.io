export interface StoryEpisode {
  id: string;
  title: string;
  thumbnail: string;
  chronology: number;
  characterIds: string[];
}


export const STORY_EPISODES: StoryEpisode[] = [

  {
    id: 'dms-akt-0',
    title: 'Die magische Schriftrolle – Akt 0',
    thumbnail: '/episodes/dms-akt-0.png',
    chronology: 1,

    characterIds: [
      'xyros',
      'rick',
      'ben'
    ]
  },
    
  {
    id: 'crackyman-part-1',
    title: 'Der Crackyman (Part 1)',
    thumbnail: '/episodes/crackyman(part1).png',
    chronology: 2,

    characterIds: [
        'niklas',
        'crackyman'
    ]
    },

  {
    id: 'dms-akt-1',
    title: 'Die magische Schriftrolle – Akt 1',
    thumbnail: '/episodes/dms-akt-1.png',
    chronology: 3,

    characterIds: [
      // Charaktere dieses Videos hier eintragen
    ]
  },

  {
    id: 'dms-akt-2',
    title: 'Die magische Schriftrolle – Akt 2',
    thumbnail: '/episodes/dms-akt-2.png',
    chronology: 4,

    characterIds: [
      // Charaktere dieses Videos hier eintragen
    ]
  },

  {
    id: 'wolf-of-waldstreet',
    title: 'Wolf of Waldstreet',
    thumbnail: '/episodes/wolf-of-waldstreet.png',
    chronology: 5,

    characterIds: [
      // Charaktere dieses Videos hier eintragen
    ]
  },

  {
    id: 'dms-akt-3',
    title: 'Die magische Schriftrolle – Akt 3',
    thumbnail: '/episodes/dms-akt-3.png',
    chronology: 6,

    characterIds: [
      // Charaktere dieses Videos hier eintragen
    ]
  }

];