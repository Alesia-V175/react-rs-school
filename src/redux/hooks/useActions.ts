import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as formActions } from '../reducers/form';
import { actions as searchActions } from '../reducers/search';

const rootActions = {
  ...formActions,
  ...searchActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
