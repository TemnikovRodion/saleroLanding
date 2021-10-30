import { AutocompleteApi } from "@/Api/Autocomplete";
import { OptionType } from "@/Types/OptionType";
import { SellerType } from "@/Types/SellerType";
import { useCallback, useState } from "react";

export const useAutocompleteOptions = (setSeller:(seller?:SellerType) => void) => {
    const [sellerOptions, setSellerOptions] = useState<SellerType[]>([]);
    const [autocompleteOptions, setAutocompleteOptions] = useState<OptionType[]>([]);

    const selectSeller = useCallback((value: string) => {
        setSeller(sellerOptions.find(option => option.seller_name === value));
        setAutocompleteOptions([]);
        setSellerOptions([]);
    }, [sellerOptions]) // selectSeller

    const loadAutocompleteOptions = useCallback((value: string) => {
        if(value.length === 3) {
            AutocompleteApi.getAutocompleteList({ item: value })
            .then((response) => {
                const suggestion_list = response.data.suggestion_list;

                setSellerOptions(suggestion_list);
                setAutocompleteOptions(suggestion_list.map(item => ({
                    key: `${item.seller_name}_${item.seller_link}_${item.seller_ogrn}`,
                    value: item.seller_name 
                })));
            });
        } // if
    }, []) // loadAutocompleteOptions

    return {
        selectSeller,
        loadAutocompleteOptions,
        autocompleteOptions,
        setAutocompleteOptions
    }
}