import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../../types/interfaces';

const initFormState: IFormCard[] = [];

export const form = createSlice({
  name: 'form',
  initialState: initFormState,
  reducers: {
    addCard: (state, { payload }: PayloadAction<IFormCard>) => {
      state.push(payload);
    },
  },
});

export const { actions, reducer } = form;
