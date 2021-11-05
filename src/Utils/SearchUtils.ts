import { SearchExpressionType } from "@/Enums/SearchExpressionType";

const marketplaceUrls = {
    catalog: 'wildberries.ru/catalog/',
    seller: 'wildberries.ru/seller/'
}

const sellerNameTypes = [
    'ооо',
    'ип'
]

// Определение типа поискового запроса
const getSearchExpressionType = (str: string) => {
    if(str.includes(marketplaceUrls.seller)) return SearchExpressionType.Seller;
    if(str.includes(marketplaceUrls.catalog)) return SearchExpressionType.Product;
    return SearchExpressionType.Other;
} // getSearchExpressionType

// Форматирование поискового запроса по типу
const getFormattedSearchExpression = (str: string, type: SearchExpressionType) => {
    switch(type) {
        case SearchExpressionType.Seller:
            {
                return str.trim();
            } // case: Seller

        case SearchExpressionType.Product: 
            {
                // Получаем из ссылки продукта подстроку до конца product_id
                const startIndex = str.indexOf(marketplaceUrls.catalog) + marketplaceUrls.catalog.length;
                const endIndex = str.indexOf('/', startIndex);

                if(endIndex === -1) return '';
                return str.slice(0, endIndex).trim();
            } // case: Product

        default:
            {
                // Удаляем ИП и ООО из поискового запроса
                sellerNameTypes.forEach(name => {
                    const nameIdx = str.toLowerCase().indexOf(name) + name.length;

                    if(nameIdx !== -1 + name.length && nameIdx < str.length) {
                        str = str.toLowerCase().slice(nameIdx).trim();
                    } // if
                })

                return str.toLowerCase().slice(0, 3);
            } // default
    } // switch
} // getFormattedSearchExpression

// Форматирование поискового запроса по типу для фильтра
const getFormattedFilterExpression = (str: string, type: SearchExpressionType) => {
    switch(type) {
        case SearchExpressionType.Product: 
            {
                // Получаем из ссылки продукта только product_id
                const startIndex = str.indexOf(marketplaceUrls.catalog) + marketplaceUrls.catalog.length;
                const endIndex = str.indexOf('/', startIndex);

                if(endIndex === -1) return '';
                return str.slice(startIndex, endIndex);
            } // case: Product

        default:
            {
                return str.toLowerCase();
            } // default
    } // switch
} // getFormattedFilterExpression

// Определение необходимости запроса списка автозаполнения
const needLoadAutocompleteList = (newSearchExpression: string, oldSearchExpression: string, searchExpressionType: SearchExpressionType) => {
    // Проверка изменения поискового запроса
    if(oldSearchExpression.localeCompare(newSearchExpression) === 0) {
        return false;
    } // if
    
    // Проверка стандартного поискового запроса
    if(searchExpressionType === SearchExpressionType.Other && newSearchExpression.length === 3) {
        return true;
    } // if
    
    // Провека поискового запроса в виде ссылок
    if(searchExpressionType !== SearchExpressionType.Other && newSearchExpression.length !== 0) {
        return true;
    } // if

    return false;
} // needLoadAutocompleteList

export const searchUtils = {
    getSearchExpressionType,
    getFormattedSearchExpression,
    getFormattedFilterExpression,
    needLoadAutocompleteList
}