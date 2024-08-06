import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { Error } from './methods/models';

const handleResponse = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: AxiosError<Error>) => {
  toast.error(error.response?.data.message);
  return error;
};

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(handleResponse, handleError);

export const api = async (options?: AxiosRequestConfig, authenticate = true) => {
  const headers = options?.headers ? { ...options.headers } : {};
  if (authenticate) {
    const token = localStorage.getItem('token');
    headers.Authorization = `Token ${token}`;
  }

  try {
    const response = await axiosInstance({
      ...options,
      headers,
      url: `http://95.217.155.226:8000/api/${options?.url}/`
    });
    return response;
  } catch (error: any) {
    toast.error('a problem');
    return Promise.reject(error);
  }
};
