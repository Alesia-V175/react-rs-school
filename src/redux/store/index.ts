import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../api/cardsApi';
import { searchSlice, reducer as searchReducer } from '../reducers';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [searchSlice.name]: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
