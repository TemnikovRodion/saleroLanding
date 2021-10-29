import { AutocompleteApi } from "@/Api/Autocomplete";
import { useEffect, useState } from "react";

export const useAutocompleteOptions = () => {
    const [searchValue, setSearchValue] = useState('');
    const [autocompleteOptions, setAutocompleteOptions] = useState<{ label: string, value: number }[]>([]);

    useEffect(() => {
        if(searchValue.length >= 2) {
            AutocompleteApi.getAutocompleteList({ item: searchValue })
            .then((response) => {
                const responseList = response.data.suggestion_list.map(item => ({
                    label: item.seller_name,
                    value: item.seller_id
                }))

                setAutocompleteOptions(responseList);
            });
        } // if
    }, [searchValue])

    return {
        searchValue,
        setSearchValue,
        autocompleteOptions,
    }
}