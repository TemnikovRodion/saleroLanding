import { ApiRouting } from "@/Routing"
import { SubscribeRequest } from "."
import { BaseResponse, rest } from ".."

const url = ApiRouting.createApiUrl('subscribe');

const subscribe = (request: SubscribeRequest): Promise<BaseResponse<void>> => {
    return rest.postRequest(url, request);
}

export const SubscriptionApi = {
    subscribe
}