import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    // getListCards(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
    // searchListCards(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
    // getCard(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
  },
});

// export const { getListCards, searchListCards, getCard } = slice.actions;

export default slice.reducer;
