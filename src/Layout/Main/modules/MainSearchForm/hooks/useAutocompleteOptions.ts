import { AutocompleteApi } from '@/Api/Autocomplete';
import { OptionType } from '@/Types/OptionType';
import { SellerType } from '@/Types/SellerType';
import { useCallback, useState } from 'react';
import { MarketplaceRouting } from '@/Routing';

export const useAutocompleteOptions = (setSeller: (seller?: SellerType) => void) => {
  const [autocompleteExpression, setAutocompleteExpression] = useState('');
  const [sellerOptions, setSellerOptions] = useState<SellerType[]>([]);
  const [autocompleteOptions, setAutocompleteOptions] = useState<OptionType[]>([]);

  const selectSeller = useCallback(
    (value: string) => {
      setSeller(sellerOptions.find((option) => option.seller_name === value));
    },
    [sellerOptions],
  ); // selectSeller

  const loadAutocompleteOptions = useCallback((value: string) => {
    let seachExpression = '';

    // Проверка url
    const { isSeller, isCatalog } = MarketplaceRouting.isMarketplaceUrl(value);
    if(isSeller || isCatalog) {
      seachExpression = isSeller ? MarketplaceRouting.sliceSellerUrl(value) : MarketplaceRouting.sliceCatalogUrl(value);
    } else if(value.length > 2) {
      seachExpression = value.slice(0, 3).toLowerCase();
    } // if

    if (autocompleteExpression.localeCompare(seachExpression) !== 0
        && (seachExpression.length === 3 || ((isSeller || isCatalog) && seachExpression.length !== 0))){
      setAutocompleteExpression(seachExpression);

      AutocompleteApi.getAutocompleteList({ item: seachExpression })
      .then((response) => {
        const suggestion_list = response.data.suggestion_list;

        setSellerOptions(suggestion_list);
        setAutocompleteOptions(
          suggestion_list.map((item) => ({
            key: `${item.seller_name}_${item.url}_${item.ogrn}`,
            value: item.seller_name,
          })),
        );
      })
      .catch(() => {
        setAutocompleteExpression('');
      });
    } // if
  }, [autocompleteExpression]); // loadAutocompleteOptions

  return {
    selectSeller,
    loadAutocompleteOptions,
    autocompleteOptions,
    setAutocompleteOptions,
  };
};
