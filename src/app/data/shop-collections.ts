export interface ShopCollection {
  id: string;
  name: string;
  description: string;

  /*
   * Ein Produkt landet in der Collection, wenn mindestens
   * einer dieser Begriffe in Name / Beschreibung / Tags vorkommt.
   */
  matchTerms: string[];

  /*
   * Optional kannst du später einzelne Spreadshop-Produkte
   * ganz gezielt über ihre sellableId zuordnen.
   */
  sellableIds: string[];
}

export const SHOP_COLLECTIONS: ShopCollection[] = [
  {
    id: 'all',
    name: 'Alle Produkte',
    description: 'Das komplette NKWallix-Collections Sortiment.',
    matchTerms: [],
    sellableIds: []
  },
  {
    id: 'magische-schriftrolle',
    name: 'Die magische Schriftrolle',
    description: 'Merch rund um die magische Schriftrolle und die Hauptstory.',
    matchTerms: [
      'magische schriftrolle',
      'schriftrolle',
      'dms'
    ],
    sellableIds: []
  },
  {
    id: 'x-eyes',
    name: 'X-Eyes Collection',
    description: 'Masken, X-Augen und alles rund um Xyros.',
    matchTerms: [
      'x-eyes',
      'x eyes',
      'x-king',
      'x king',
      'xyros'
    ],
    sellableIds: []
  },
  {
    id: 'crackyman',
    name: 'Crackyman Collection',
    description: 'Merch rund um Crackyman und Philip.',
    matchTerms: [
      'crackyman',
      'philip'
    ],
    sellableIds: []
  }
];
