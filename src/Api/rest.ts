import { BaseResponse } from './BaseResponse';
import { ResponseStatus } from './ResponseStatus';
import axios from 'axios';
import qs from 'qs';

axios.interceptors.response.use(
  function (response) {
    const data = response.data as BaseResponse<void>;

    if (data.status === ResponseStatus.fail) {
      return Promise.reject(response.data);
    } // if

    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// GET
const getRequest = async <TResponse>(
  url: string,
  params?: Record<string, any>,
  isFile?: boolean,
): Promise<TResponse> => {

  const query = params ? qs.stringify(params, { allowDots: true }) : null;
  if (query) {
    url = url + '?' + query;
  } // if

  const result = await axios.get(url, {
    headers: {
      'Cache-Control': 'no-cache',
    },
    responseType: isFile ? 'blob' : undefined,
  });

  return result.data as TResponse;
}; // getRequest

// POST
const postRequest = async <TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> => {
  const result = await axios.post(url, data, {});

  return result.data as TResponse;
}; // postRequest

// PUT
const putRequest = async <TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> => {
  const result = await axios.put(url, data, {});

  return result.data as TResponse;
}; // putRequest

// DELETE
const deleteRequest = async <TResponse>(url: string): Promise<TResponse> => {
  const result = await axios.delete(url, {});

  return result.data as TResponse;
}; // deleteRequest

export const rest = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
