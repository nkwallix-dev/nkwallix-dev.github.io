import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  DecimalPipe
} from '@angular/common';

import {
  SHOP_COLLECTIONS,
  ShopCollection
} from '../../data/shop-collections';

interface SpreadshopPrice {
  amount?: number | string;
  currencyId?: string;
}

interface SpreadshopPreviewImage {
  url?: string;
}

interface SpreadshopProduct {
  sellableId:
    | string
    | number
    | null;

  ideaId:
    | string
    | number
    | null;

  mainDesignId:
    | string
    | number
    | null;

  productTypeId:
    | string
    | number
    | null;

  name: string;
  description: string;

  tags: string[];

  price:
    | SpreadshopPrice
    | number
    | string
    | null;

  previewImage:
    | SpreadshopPreviewImage
    | string
    | null;

  appearanceIds:
    Array<string | number>;

  defaultAppearanceId:
    | string
    | number
    | null;
}

interface SpreadshopProductFile {
  shopId: string;
  locale: string;
  syncedAt: string | null;
  count: number;
  products: SpreadshopProduct[];
}

interface ShopCard {
  key: string;
  sellableId?: string;

  name: string;
  description: string;
  image: string;

  tags: string[];

  priceValue: number | null;
  currency: string;
  priceLabel: string;

  demo: boolean;
}

interface CartItem {
  key: string;

  name: string;
  image: string;

  priceValue: number | null;
  currency: string;

  demo: boolean;

  quantity: number;
}

@Component({
  selector: 'app-shop',
  imports: [
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop
  implements OnInit {

  readonly spreadshopUrl =
    'https://nkwallix-collections.myspreadshop.at/';

  readonly collections =
    SHOP_COLLECTIONS;

  loading = true;
  loadFailed = false;

  menuOpen = false;
  cartOpen = false;

  searchTerm = '';

  activeCollectionId =
    'all';

  private realProducts:
    SpreadshopProduct[] = [];

  cartItems:
    CartItem[] = [];

  private readonly demoProducts:
    ShopCard[] = [
      {
        key:
          'demo-dms',

        name:
          'Magische Schriftrolle Hoodie',

        description:
          'Vorschaukarte für einen zukünftigen Drop rund um Die magische Schriftrolle.',

        image:
          '/episodes/dms-trailer.png',

        tags: [
          'magische schriftrolle',
          'schriftrolle',
          'dms',
          'hoodie'
        ],

        priceValue:
          null,

        currency:
          'EUR',

        priceLabel:
          'Vorschau',

        demo:
          true
      },
      {
        key:
          'demo-xeyes',

        name:
          'X-Eyes Shirt',

        description:
          'Vorschaukarte für die X-Eyes Collection.',

        image:
          '/episodes/x-king-ft-crackyman.png',

        tags: [
          'x-eyes',
          'x-king',
          'xyros',
          'shirt'
        ],

        priceValue:
          null,

        currency:
          'EUR',

        priceLabel:
          'Vorschau',

        demo:
          true
      },
      {
        key:
          'demo-crackyman',

        name:
          'Crackyman Collection',

        description:
          'Vorschaukarte für einen späteren Crackyman-Drop.',

        image:
          '/episodes/crackyman-part-3.png',

        tags: [
          'crackyman',
          'philip'
        ],

        priceValue:
          null,

        currency:
          'EUR',

        priceLabel:
          'Vorschau',

        demo:
          true
      }
    ];

  ngOnInit() {
    this.restoreCart();

    /*
     * Absichtlich NICHT awaiten:
     * Die Vorschau-Produkte sind sofort da.
     * Der API-Sync läuft parallel und ersetzt sie,
     * sobald echte Produkte gefunden wurden.
     */
    void this.loadProducts();
  }

  get activeCollection():
    ShopCollection {

    return (
      this.collections.find(
        collection =>
          collection.id ===
          this.activeCollectionId
      ) ??
      this.collections[0]
    );
  }

  get usingDemoProducts(): boolean {
    return (
      this.realProducts.length === 0
    );
  }

  get syncLabel(): string {
    if (this.loading) {
      return 'Synchronisiere...';
    }

    if (this.loadFailed) {
      return 'Vorschau';
    }

    if (this.usingDemoProducts) {
      return 'Vorschau';
    }

    return `${this.realProducts.length} Produkte`;
  }

  get visibleProducts():
    ShopCard[] {

    const source =
      this.realProducts.length > 0
        ? this.realProducts.map(
            product =>
              this.toCard(product)
          )
        : this.demoProducts;

    const collectionFiltered =
      source.filter(
        product =>
          this.matchesCollection(
            product,
            this.activeCollection
          )
      );

    const query =
      this.normalize(
        this.searchTerm
      );

    if (!query) {
      return collectionFiltered;
    }

    return collectionFiltered.filter(
      product => {
        const searchable =
          this.normalize(
            [
              product.name,
              product.description,
              ...product.tags
            ].join(' ')
          );

        return searchable.includes(
          query
        );
      }
    );
  }

  get cartCount(): number {
    return this.cartItems.reduce(
      (
        total,
        item
      ) =>
        total +
        item.quantity,
      0
    );
  }

  get cartHasDemoItems(): boolean {
    return this.cartItems.some(
      item =>
        item.demo
    );
  }

  get cartSubtotal(): number | null {
    if (
      this.cartItems.length === 0 ||
      this.cartItems.some(
        item =>
          item.priceValue === null
      )
    ) {
      return null;
    }

    return this.cartItems.reduce(
      (
        total,
        item
      ) =>
        total +
        (
          item.priceValue! *
          item.quantity
        ),
      0
    );
  }

  get cartSubtotalLabel(): string {
    if (
      this.cartSubtotal === null
    ) {
      return 'Noch keine echten Preise';
    }

    return new Intl
      .NumberFormat(
        'de-AT',
        {
          style: 'currency',
          currency: 'EUR'
        }
      )
      .format(
        this.cartSubtotal
      );
  }

  toggleMenu() {
    this.menuOpen =
      !this.menuOpen;

    if (this.menuOpen) {
      this.cartOpen = false;
    }
  }

  toggleCart() {
    this.cartOpen =
      !this.cartOpen;

    if (this.cartOpen) {
      this.menuOpen = false;
    }
  }

  closeDrawers() {
    this.menuOpen = false;
    this.cartOpen = false;
  }

  selectCollection(
    collectionId: string
  ) {
    this.activeCollectionId =
      collectionId;

    this.menuOpen = false;
  }

  onSearchInput(
    event: Event
  ) {
    this.searchTerm =
      (
        event.target as
          HTMLInputElement
      ).value;
  }

  addToCart(
    product: ShopCard
  ) {
    const existing =
      this.cartItems.find(
        item =>
          item.key ===
          product.key
      );

    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({
        key:
          product.key,

        name:
          product.name,

        image:
          product.image,

        priceValue:
          product.priceValue,

        currency:
          product.currency,

        demo:
          product.demo,

        quantity:
          1
      });
    }

    this.saveCart();

    this.cartOpen = true;
    this.menuOpen = false;
  }

  decreaseCartItem(
    item: CartItem
  ) {
    if (
      item.quantity > 1
    ) {
      item.quantity--;
    } else {
      this.removeCartItem(
        item
      );

      return;
    }

    this.saveCart();
  }

  increaseCartItem(
    item: CartItem
  ) {
    item.quantity++;
    this.saveCart();
  }

  removeCartItem(
    item: CartItem
  ) {
    this.cartItems =
      this.cartItems.filter(
        cartItem =>
          cartItem.key !==
          item.key
      );

    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  openSpreadshop() {
    window.open(
      this.spreadshopUrl,
      '_blank',
      'noopener,noreferrer'
    );
  }

  @HostListener(
    'window:keydown.escape'
  )
  closeOnEscape() {
    this.closeDrawers();
  }

  private async loadProducts() {
    this.loading = true;
    this.loadFailed = false;

    const controller =
      new AbortController();

    const timeout =
      window.setTimeout(
        () =>
          controller.abort(),
        4500
      );

    try {
      const response =
        await fetch(
          '/shop/products.json',
          {
            cache:
              'no-store',

            signal:
              controller.signal
          }
        );

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}`
        );
      }

      const data = (await response.json()) as SpreadshopProductFile;

      this.realProducts =
        Array.isArray(
          data.products
        )
          ? data.products
          : [];
    } catch (
      error
    ) {
      console.warn(
        'Shop-Daten konnten nicht geladen werden. Vorschau bleibt aktiv.',
        error
      );

      this.realProducts = [];
      this.loadFailed = true;
    } finally {
      window.clearTimeout(
        timeout
      );

      this.loading = false;
    }
  }

  private matchesCollection(
    product: ShopCard,
    collection: ShopCollection
  ): boolean {

    if (
      collection.id === 'all'
    ) {
      return true;
    }

    if (
      product.sellableId &&
      collection.sellableIds
        .includes(
          product.sellableId
        )
    ) {
      return true;
    }

    const haystack =
      this.normalize(
        [
          product.name,
          product.description,
          ...product.tags
        ].join(' ')
      );

    return collection
      .matchTerms
      .some(
        term =>
          haystack.includes(
            this.normalize(term)
          )
      );
  }

  private toCard(
    product: SpreadshopProduct
  ): ShopCard {

    const price =
      this.extractPrice(
        product.price
      );

    const currency =
      this.extractCurrency(
        product.price
      );

    return {
      key:
        String(
          product.sellableId ??
          product.ideaId ??
          product.name
        ),

      sellableId:
        product.sellableId !==
          null
          ? String(
              product.sellableId
            )
          : undefined,

      name:
        product.name ||
        'NKWallix Produkt',

      description:
        product.description ||
        'Offizielles NKWallix-Produkt.',

      image:
        this.getPreviewUrl(
          product.previewImage
        ),

      tags:
        Array.isArray(
          product.tags
        )
          ? product.tags
          : [],

      priceValue:
        price,

      currency:
        currency,

      priceLabel:
        price !== null
          ? this.formatPrice(
              price,
              currency
            )
          : 'Preis im Shop',

      demo:
        false
    };
  }

  private extractPrice(
    price:
      SpreadshopProduct[
        'price'
      ]
  ): number | null {

    if (
      typeof price === 'number'
    ) {
      return price;
    }

    if (
      typeof price === 'string'
    ) {
      const parsed =
        Number(price);

      return Number.isFinite(
        parsed
      )
        ? parsed
        : null;
    }

    if (
      price &&
      price.amount !==
        undefined
    ) {
      const parsed =
        Number(
          price.amount
        );

      return Number.isFinite(
        parsed
      )
        ? parsed
        : null;
    }

    return null;
  }

  private extractCurrency(
    price:
      SpreadshopProduct[
        'price'
      ]
  ): string {

    if (
      price &&
      typeof price ===
        'object' &&
      price.currencyId
    ) {
      return price.currencyId;
    }

    return 'EUR';
  }

  private getPreviewUrl(
    preview:
      SpreadshopProduct[
        'previewImage'
      ]
  ): string {

    if (
      typeof preview ===
        'string'
    ) {
      return preview;
    }

    if (
      preview &&
      typeof preview.url ===
        'string'
    ) {
      return preview.url;
    }

    return '/logo.png';
  }

  private formatPrice(
    value: number,
    currency: string
  ): string {

    return new Intl
      .NumberFormat(
        'de-AT',
        {
          style:
            'currency',

          currency:
            currency ||
            'EUR'
        }
      )
      .format(
        value
      );
  }

  private normalize(
    value: string
  ): string {

    return value
      .toLocaleLowerCase(
        'de-AT'
      )
      .normalize(
        'NFD'
      )
      .replace(
        /[\u0300-\u036f]/g,
        ''
      )
      .trim();
  }

  private restoreCart() {
    try {
      const raw =
        localStorage.getItem(
          'nkwallix-shop-cart'
        );

      if (!raw) {
        return;
      }

      const parsed =
        JSON.parse(raw);

      if (
        Array.isArray(
          parsed
        )
      ) {
        this.cartItems =
          parsed;
      }
    } catch {
      this.cartItems = [];
    }
  }

  private saveCart() {
    try {
      localStorage.setItem(
        'nkwallix-shop-cart',
        JSON.stringify(
          this.cartItems
        )
      );
    } catch {
      /*
       * Falls LocalStorage nicht verfügbar ist,
       * funktioniert der Warenkorb trotzdem bis zum Reload.
       */
    }
  }
}
