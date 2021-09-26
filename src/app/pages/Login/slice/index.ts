import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { AuthState, LoginPayload, LoginResponse } from './types';

export const initialState: AuthState = {
  jwt: null,
  userInfo: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<LoginPayload>) {
      state.jwt = null;
      state.userInfo = null;
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.jwt = action.payload.jwt;
      state.userInfo = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
