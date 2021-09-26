import { useAuthSlice } from 'app/pages/Login/slice';
import { LoginPayload } from 'app/pages/Login/slice/types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  const onSubmit = useCallback(
    (credentials: LoginPayload) => {
      try {
        dispatch(actions.loginRequest(credentials));
      } catch (error) {}
    },
    [actions, dispatch],
  );

  return {
    onSubmit,
  };
};
