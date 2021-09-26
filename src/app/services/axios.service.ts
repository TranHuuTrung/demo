import { JWT_LOCALSTORAGE } from 'app/constants';
import {
  removeLocalStorage,
  getJwtLocalStorage,
} from 'app/helpers/local-storage';
import axios from 'axios';

class AxiosService {
  private service;

  constructor() {
    const JWT = getJwtLocalStorage();
    const service = axios.create({
      baseURL: process.env.REACT_APP_URL_API,
      headers: {},
    });
    service.interceptors.request.use(function (config) {
      if (!!JWT) {
        config.headers.Authorization = `Bearer ${JWT}`;
      }
      return config;
    });

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  setHeader(name: string, value: any) {
    this.service.defaults.headers.common[name] = value;
  }

  removeHeader(name: string) {
    delete this.service.defaults.headers.common[name];
  }

  handleSuccess(response: any) {
    return response;
  }

  redirectToLogin() {
    if (window.location.pathname !== '/auth/login') {
      window.location.href = '/auth/login';
      removeLocalStorage(JWT_LOCALSTORAGE);
    }
  }

  handleError = (error: any) => {
    if (error.response?.data?.message === 'Invalid token.') {
      this.redirectToLogin();
    }

    switch (error.response.status) {
      case 401:
        this.redirectToLogin();
        break;
      default:
        return Promise.reject(error);
    }
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };

  get(endpoint: string, config?: any) {
    return this.service.get(endpoint, { config });
  }

  post(endpoint: string, payload: any, config?: any) {
    return this.service.post(endpoint, payload, config);
  }

  put(endpoint: string, payload?: any, config?: any) {
    return this.service.put(endpoint, payload, config);
  }

  delete(endpoint: string) {
    return this.service.delete(endpoint);
  }
}

export default new AxiosService();
