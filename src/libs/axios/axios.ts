import axios, { AxiosInstance } from 'axios';
import { router } from '@/router';
import { HTTP_STATUS_CODE_401 } from './constants';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `https://${window.location.host}`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === HTTP_STATUS_CODE_401) {
      router.navigate('/login');
      return new Promise(() => {});
    }
    return Promise.reject(error);
  },
);
