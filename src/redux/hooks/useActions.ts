import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { searchSlice } from '../reducers';

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(searchSlice.actions, dispatch), [dispatch]);
};

export default useActions;
