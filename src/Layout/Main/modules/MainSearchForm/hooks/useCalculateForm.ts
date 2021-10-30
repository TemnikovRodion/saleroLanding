import { CalculateApi } from "@/Api/Calculate";
import { SellerInfoType } from "@/Types/SellerInfoType";
import { SellerType } from "@/Types/SellerType";
import { useCallback, useState } from "react";

export const useCalculateForm = (setSellerInfo: (sellerInfo: SellerInfoType) => void, seller?: SellerType) => {
    const [isLoading, setIsLoading] = useState(false);

    const calculate = useCallback(() => {
        if(seller) {
          setIsLoading(true);

          CalculateApi.getCalculateInfo({ seller_id: seller.seller_id })
          .then((response) => {
              setIsLoading(false);
              setSellerInfo(response.data);
          })
        } // if
    }, [seller])

    return {
        isLoading,
        calculate
    }
}