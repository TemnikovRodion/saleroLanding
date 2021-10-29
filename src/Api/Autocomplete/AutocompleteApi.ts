import { ApiRouting } from "@/Routing"
import { GetAutocompleteListRequest, GetAutocompleteListResponse } from "."
import { BaseResponse, rest } from ".."

const url = ApiRouting.createApiUrl('autocomplete');

const getAutocompleteList = (request: GetAutocompleteListRequest): Promise<BaseResponse<GetAutocompleteListResponse>> => {
    return rest.postRequest(url, request);
}

export const AutocompleteApi = {
    getAutocompleteList
}