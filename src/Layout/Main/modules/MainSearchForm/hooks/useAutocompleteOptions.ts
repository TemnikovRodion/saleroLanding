import { AutocompleteApi } from '@/Api/Autocomplete';
import { OptionType } from '@/Types/OptionType';
import { SellerType } from '@/Types/SellerType';
import { useCallback, useState } from 'react';
import { searchUtils } from '@/Utils/SearchUtils';

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
    // Получаем тип поискового запроса
    const searchExpressionType = searchUtils.getSearchExpressionType(value);

    // Форматируем поисковый запрос по типу
    const formattedSearchExpression = searchUtils.getFormattedSearchExpression(value, searchExpressionType);

    if (searchUtils.needLoadAutocompleteList(formattedSearchExpression, autocompleteExpression, searchExpressionType)) {
      setAutocompleteExpression(formattedSearchExpression);
    
      AutocompleteApi.getAutocompleteList({ item: formattedSearchExpression })
      .then((response) => {
        const suggestion_list = response.data.suggestion_list;
    
        setSellerOptions(suggestion_list);
        setAutocompleteOptions(
          suggestion_list.map((item) => ({
            key: item.seller_id,
            value: item.seller_name,
            seller: item
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
