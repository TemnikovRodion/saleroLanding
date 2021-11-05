const marketplaceUrls = {
    catalog: 'wildberries.ru/catalog/',
    seller: 'wildberries.ru/seller/'
}

// Формирование поисковой ссылки для продавца
const sliceSellerUrl = (str: string) => {
    const startIndex = str.indexOf(marketplaceUrls.seller) + marketplaceUrls.seller.length;
    const endIndex = str.indexOf('/', startIndex);

    if(endIndex === - 1) return '';

    return str.slice(0, endIndex);
}

// Формирование поисковой ссылки для каталога
const sliceCatalogUrl = (str: string) => {
    const startIndex = str.indexOf(marketplaceUrls.catalog) + marketplaceUrls.catalog.length;
    const endIndex = str.indexOf('/', startIndex);

    if(endIndex === - 1) return '';

    return str.slice(0, endIndex);
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