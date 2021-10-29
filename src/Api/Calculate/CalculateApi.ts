import { ApiRouting } from "@/Routing"
import { GetCalculateInfoRequest, GetCalculateInfoResponse } from "."
import { BaseResponse, rest } from ".."

const url = ApiRouting.createApiUrl('calculate');

const getCalculateInfo = (request: GetCalculateInfoRequest): Promise<BaseResponse<GetCalculateInfoResponse>> => {
    return rest.postRequest(url, request);
}

export const CalculateApi = {
    getCalculateInfo
}