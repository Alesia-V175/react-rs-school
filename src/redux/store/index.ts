import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../api/cardsApi';
import { search, reducer as searchReducer } from '../reducers/search';
import { form, reducer as formReducer } from '../reducers/form';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [search.name]: searchReducer,
    [form.name]: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
