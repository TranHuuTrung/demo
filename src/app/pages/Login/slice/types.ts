import { Nullable } from 'app/constants/types';

/* --- STATE --- */
export interface AuthState {
  jwt: Nullable<string>;
  userInfo: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: Nullable<Error | string>;
}

export type LoginPayload = {
  email: string;
  password: string;
};

export interface LoginResponse {
  jwt: string;
  user: any;
}
