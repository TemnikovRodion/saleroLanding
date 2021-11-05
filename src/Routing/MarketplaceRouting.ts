const searchSymbolsCount = 3;

const marketplaceUrls = {
    catalog: 'wildberries.ru/catalog/',
    seller: 'wildberries.ru/seller/'
}

// Формирование поисковой ссылки для продавца
const sliceSellerUrl = (str: string) => {
    const idx = str.indexOf(marketplaceUrls.seller) + marketplaceUrls.seller.length + searchSymbolsCount;

    if(idx > str.length) return '';

    return str.slice(0, idx);
}

// Формирование поисковой ссылки для каталога
const sliceCatalogUrl = (str: string) => {
    const idx = str.indexOf(marketplaceUrls.catalog) + marketplaceUrls.catalog.length + searchSymbolsCount;

    if(idx > str.length) return '';

    return str.slice(0, idx);
}

// Проверка на ссылку
const isMarketplaceUrl = (str: string) => {
    return {
        isSeller: str.includes(marketplaceUrls.seller),
        isCatalog: str.includes(marketplaceUrls.catalog)
    };
}

export const MarketplaceRouting = {
    sliceSellerUrl,
    sliceCatalogUrl,
    isMarketplaceUrl
}