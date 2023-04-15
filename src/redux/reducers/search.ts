import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initStateSearch = {
  stateSearch: '',
};

export const search = createSlice({
  name: 'search',
  initialState: initStateSearch,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      const stateValue = state;
      stateValue.stateSearch = action.payload;
    },
  },
});

export const { actions, reducer } = search;
