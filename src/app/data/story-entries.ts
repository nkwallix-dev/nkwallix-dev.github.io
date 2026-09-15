export type CharacterRole = 'Protagonist' | 'Antagonist' | 'Animalisch';

export interface CharacterEntry {
  kind: 'character';
  id: string;
  name: string;
  role: CharacterRole;
  description: string;
  image: string;
  imageClass: string;
  magicalBeing: boolean;
}

export interface ArtifactEntry {
  kind: 'artifact';
  id: string;
  name: string;
  description: string;
  image: string;
  imageClass: string;
}

export type StoryEntry = CharacterEntry | ArtifactEntry;

export const STORY_ENTRIES: StoryEntry[] = [
  {
    kind: 'character',
    id: 'xyros',
    name: 'Xyros',
    role: 'Antagonist',
    description: 'Der Beobachter im Schatten. X-Augen. Kein Zufall.',
    image: '/characters/Xyros.png',
    imageClass: 'xyros-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'crackyman',
    name: 'Crackyman',
    role: 'Antagonist',
    description: 'Eine Figur zwischen Chaos, Jagd und Geheimnissen, die alles verändern.',
    image: '/characters/Crackyman.png',
    imageClass: 'crackyman-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'rick',
    name: 'Rick',
    role: 'Antagonist',
    description: 'Auf einem Auge blind, auf dem anderen FBI Agent.',
    image: '/characters/Rick.png',
    imageClass: 'rick-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'niklas',
    name: 'Niklas',
    role: 'Protagonist',
    description: 'Keine Ahnung wie ich hier gelandet bin tbh.',
    image: '/characters/Niklas.png',
    imageClass: 'niklas-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'ben',
    name: 'Ben',
    role: 'Protagonist',
    description: 'Ich wollte doch nur meine geliebte Sophie wieder sehen...',
    image: '/characters/Ben.png',
    imageClass: 'ben-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'xoph',
    name: 'Xoph',
    role: 'Antagonist',
    description: '...',
    image: '/characters/Xoph.png',
    imageClass: 'xoph-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'dealer',
    name: 'Dealer',
    role: 'Antagonist',
    description: 'Das Monster in dir...',
    image: '/characters/Dealer.png',
    imageClass: 'dealer-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'melissa',
    name: 'Melissa',
    role: 'Protagonist',
    description: 'Kellnerin halt.',
    image: '/characters/Melissa.png',
    imageClass: 'melissa-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'slim-schlappen',
    name: 'Slim Schlappen',
    role: 'Antagonist',
    description: 'Wos wüst du, owa fa mein Grundstickl',
    image: '/characters/SlimSchlappen.png',
    imageClass: 'slimschlappen-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'ski-augli',
    name: 'Ski Augli',
    role: 'Antagonist',
    description: 'Ich bin kein Perverser. Ich bin Ski Augli.',
    image: '/characters/SkiAugli.png',
    imageClass: 'skiaugli-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'amina',
    name: 'Amina',
    role: 'Antagonist',
    description: 'Beute fängt man für gewöhnlich als Raubtier. Nicht als hübsche Dame.',
    image: '/characters/Amina.png',
    imageClass: 'amina-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'corra',
    name: 'Corra',
    role: 'Protagonist',
    description: 'Du trägst ihn immer noch bei dir...',
    image: '/characters/Corra.png',
    imageClass: 'corra-image',
    magicalBeing: true
  },
  {
    kind: 'character',
    id: 'hermiminone',
    name: 'Hermiminone',
    role: 'Antagonist',
    description: 'Crack, Crack, Crack: Ich bin weg!',
    image: '/characters/Hermiminone.png',
    imageClass: 'hermiminone-image',
    magicalBeing: true
  },
  {
    kind: 'character',
    id: 'wolf-of-waldstreet',
    name: 'Wolf Of Waldstreet',
    role: 'Protagonist',
    description: 'Freshere Bude als im Wolfshain',
    image: '/characters/WolfOfWaldStreet.png',
    imageClass: 'wolfofwaldstreet-image',
    magicalBeing: true
  },
  {
    kind: 'character',
    id: 'gabba-gandalf',
    name: 'Gabba Gandalf',
    role: 'Antagonist',
    description: 'Reich bis zum Schwanz, der nichtmal so groß aussieht!',
    image: '/characters/GabbaGandalf.png',
    imageClass: 'gabbagandalf-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'whackyman',
    name: 'Whackyman',
    role: 'Antagonist',
    description: 'Ich hab auch versucht ihn zu finden!',
    image: '/characters/Whackyman.png',
    imageClass: 'whackyman-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'schafe',
    name: 'hornlos-unterentwickelte Kinder',
    role: 'Animalisch',
    description: 'Unsere Mutter klingt viel hornier als du!',
    image: '/characters/Schafe.png',
    imageClass: 'Schafe-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'fliege',
    name: 'nervige Fliege',
    role: 'Animalisch',
    description: 'sssssssssssssssssssssssssss',
    image: '/characters/Fliege.png',
    imageClass: 'Fliege-image',
    magicalBeing: false
  },
  {
    kind: 'character',
    id: 'mafakxi',
    name: 'Mafakxi',
    role: 'Protagonist',
    description: 'Ich wünscht ich könnt euch nochmal sehn...',
    image: '/characters/Mafakxi.png',
    imageClass: 'Mafakxi-image',
    magicalBeing: false
  },

  // Magische / storyrelevante Artefakte
  {
    kind: 'artifact',
    id: 'larry',
    name: 'Larry',
    description: 'Dickere Schädeldecke als ein Pachycephalosaurus.',
    image: '/characters/Larry.png',
    imageClass: 'Larry-image'
  },
  {
    kind: 'artifact',
    id: 'xyros-altes-zepter',
    name: "Xyros' Konservations-Zepter",
    description: "Xoph's Rettung in letzter Sekunde.",
    image: '/items/XyrosAltesZepter.png',
    imageClass: 'artifact-image'
  },
  {
    kind: 'artifact',
    id: 'xyros-neues-zepter',
    name: "Xyros' Zepter ft. Larry",
    description: 'Das mächtige Zepter von Xyros – mit Larry als Teil davon.',
    image: '/items/XyrosNeuesZepter.png',
    imageClass: 'artifact-image'
  },
  {
    kind: 'artifact',
    id: 'magische-schriftrolle',
    name: 'Die magische Schriftrolle',
    description: 'Die Schriftrolle, um die sich mehr dreht, als gesund wäre.',
    image: '/items/MagischeSchriftrolle.png',
    imageClass: 'artifact-image'
  },
  {
    kind: 'artifact',
    id: 'hermiminones-zauberstab',
    name: 'Hermiminones Zauberstab',
    description: 'Hex Hex!! Hex Hex!!',
    image: '/items/HermiminonesZauberstab.png',
    imageClass: 'artifact-image'
  }
];
