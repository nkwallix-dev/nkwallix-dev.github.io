const SHOP_ID =
  process.env.SPREADSHOP_SHOP_ID ||
  '1590621';

const API_KEY =
  process.env.SPREADSHOP_API_KEY;

const LOCALE =
  process.env.SPREADSHOP_LOCALE ||
  'de_AT';

const BASE_URL =
  'https://api.spreadshirt.net';

const USER_AGENT =
  process.env.SPREADSHOP_USER_AGENT ||
  'NKWallixStoryhub/1.0 (https://nkwallix-dev.github.io; nkwallix-dev@users.noreply.github.com)';

if (!API_KEY) {
  console.error(
    'SPREADSHOP_API_KEY fehlt.'
  );

  process.exit(1);
}

const headers = {
  Authorization:
    `SprdAuth apiKey="${API_KEY}"`,

  'User-Agent':
    USER_AGENT,

  Accept:
    'application/json'
};

async function fetchPage(page) {
  const url =
    new URL(
      `/api/v1/shops/${SHOP_ID}/sellables`,
      BASE_URL
    );

  url.searchParams.set(
    'page',
    String(page)
  );

  url.searchParams.set(
    'mediaType',
    'json'
  );

  url.searchParams.set(
    'locale',
    LOCALE
  );

  const response =
    await fetch(
      url,
      {
        headers
      }
    );

  if (!response.ok) {
    const body =
      await response.text();

    throw new Error(
      [
        `Spreadshirt API Fehler:`,
        `${response.status}`,
        response.statusText,
        body.slice(0, 500)
      ].join(' ')
    );
  }

  return response.json();
}

function normalizeSellable(item) {
  return {
    sellableId:
      item.sellableId ?? null,

    ideaId:
      item.ideaId ?? null,

    mainDesignId:
      item.mainDesignId ?? null,

    productTypeId:
      item.productTypeId ?? null,

    name:
      item.name ?? '',

    description:
      item.description ?? '',

    tags:
      Array.isArray(item.tags)
        ? item.tags
        : [],

    price:
      item.price ?? null,

    previewImage:
      item.previewImage ?? null,

    appearanceIds:
      Array.isArray(
        item.appearanceIds
      )
        ? item.appearanceIds
        : [],

    defaultAppearanceId:
      item.defaultAppearanceId ?? null
  };
}

async function main() {
  console.log(
    `Spreadshop ${SHOP_ID} wird synchronisiert...`
  );

  const firstPage =
    await fetchPage(0);

  const limit =
    Number(
      firstPage.limit ?? 48
    );

  const count =
    Number(
      firstPage.count ?? 0
    );

  const pageCount =
    Math.min(
      198,
      Math.max(
        1,
        Math.ceil(
          count / limit
        )
      )
    );

  const allSellables = [
    ...(
      Array.isArray(
        firstPage.sellables
      )
        ? firstPage.sellables
        : []
    )
  ];

  for (
    let page = 1;
    page < pageCount;
    page++
  ) {
    console.log(
      `Lade Seite ${page + 1}/${pageCount}...`
    );

    const data =
      await fetchPage(page);

    if (
      Array.isArray(
        data.sellables
      )
    ) {
      allSellables.push(
        ...data.sellables
      );
    }
  }

  const products =
    allSellables
      .map(normalizeSellable)
      .filter(
        product =>
          product.sellableId &&
          product.name
      );

  const output = {
    shopId:
      SHOP_ID,

    locale:
      LOCALE,

    syncedAt:
      new Date()
        .toISOString(),

    count:
      products.length,

    products
  };

  const fs =
    await import(
      'node:fs/promises'
    );

  await fs.mkdir(
    'public/shop',
    {
      recursive: true
    }
  );

  /*
   * Erst NACH einem komplett erfolgreichen API-Lauf schreiben.
   * Falls Spreadshirt gerade down ist, bleibt die letzte gute
   * products.json im Repo erhalten.
   */
  await fs.writeFile(
    'public/shop/products.json',
    JSON.stringify(
      output,
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log(
    `${products.length} Produkte gespeichert.`
  );
}

main().catch(
  error => {
    console.error(
      error
    );

    process.exit(1);
  }
);
