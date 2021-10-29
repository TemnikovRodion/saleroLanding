import { CalculateApi } from "@/Api/Calculate";
import { useCallback, useEffect, useState } from "react";

export const useCalculateForm = (searchValue: string, autocompleteOptions: { label: string, value: number }[]) => {
    const [isLoading, setIsLoading] = useState(false);
    const [sellerId, setSellerId] = useState<number | null>(null);
    
    useEffect(() => {
        setSellerId(autocompleteOptions.find(option => option.label === searchValue)?.value ?? null);
    }, [searchValue, autocompleteOptions])

    const calculate = useCallback(() => {
        if(sellerId) {
          setIsLoading(true);

          CalculateApi.getCalculateInfo({ seller_id: sellerId })
          .then((response) => {
              setIsLoading(false);
              console.log(response);              
          })
        } // if
    }, [sellerId])

    return {
        isLoading,
        calculate
    }
}