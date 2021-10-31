import { BaseResponse } from "@/Api";
import { ResponseErrors } from "@/Api/ResponseErrors";
import { SubscriptionApi } from "@/Api/Subscription";
import { SellerType } from "@/Types/SellerType";
import { useCallback, useState } from "react"

export const useAlertsSubscription = (seller?: SellerType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState({
        visible: false,
        title: '',
        message: ''
    });
    const [email, setEmail] = useState('');

    const subscribe = useCallback(() => {
        if(seller) {
            setIsLoading(true);
        
            SubscriptionApi.subscribe({ email: email, seller_id: seller?.seller_id})
            .then((response) => {
                setIsLoading(false);
                setEmail('');

                setModal({
                    visible: true,
                    title: 'Подписка оформлена',
                    message: 'Вы подписались на получение алертов! Проверьте свою почту.'
                })
            })
            .catch((error) => {
                setIsLoading(false);

                const errorMessage = (error as BaseResponse<void>).message;
                const localizedErrorMessage = ResponseErrors[errorMessage as keyof typeof ResponseErrors];

                if(localizedErrorMessage) {
                    setModal({
                        visible: true,
                        title: 'Ошибка',
                        message: localizedErrorMessage
                    })
                } // if
            });
        } // if
    }, [seller, email])

    return {
        email,
        setEmail,
        subscribe,
        isLoading,
        modal,
        setModal
    }
}