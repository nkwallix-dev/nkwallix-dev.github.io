import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop
  implements AfterViewInit, OnDestroy {

  private readonly scriptId =
    'spreadshop-client-script';

  ngAfterViewInit(): void {
    this.loadSpreadshop();
  }

  ngOnDestroy(): void {
    this.removeSpreadshopScript();
  }

  private loadSpreadshop(): void {
    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    ) {
      return;
    }

    const shopContainer =
      document.getElementById('myShop');

    if (!shopContainer) {
      return;
    }

    (
      window as Window & {
        spread_shop_config?: {
          shopName: string;
          locale: string;
          prefix: string;
          baseId: string;
        };
      }
    ).spread_shop_config = {
      shopName: 'nkwallix-collections',
      locale: 'de_AT',
      prefix:
        'https://nkwallix-collections.myspreadshop.at',
      baseId: 'myShop'
    };

    this.removeSpreadshopScript();

    const script =
      document.createElement('script');

    script.id = this.scriptId;
    script.type = 'text/javascript';
    script.src =
      'https://nkwallix-collections.myspreadshop.at/shopfiles/shopclient/shopclient.nocache.js';

    script.async = true;

    document.body.appendChild(script);
  }

  private removeSpreadshopScript(): void {
    if (typeof document === 'undefined') {
      return;
    }

    document
      .getElementById(this.scriptId)
      ?.remove();
  }
}
