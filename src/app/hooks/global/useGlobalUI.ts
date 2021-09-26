import { useGlobalLoadingSlice } from 'app/components/GlobalLoading/slice';
import { getLoadingStatus } from 'app/components/GlobalLoading/slice/selectors';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useGlobalUI = () => {
  const dispatch = useDispatch();
  const { actions } = useGlobalLoadingSlice();
  const isLoading = useSelector(getLoadingStatus);

  const onShowLoading = useCallback(() => {
    dispatch(actions.showLoading());
  }, [actions, dispatch]);

  const onHideLoading = useCallback(() => {
    dispatch(actions.hideLoading());
  }, [actions, dispatch]);

  return {
    isLoading,
    onShowLoading,
    onHideLoading,
  };
};
