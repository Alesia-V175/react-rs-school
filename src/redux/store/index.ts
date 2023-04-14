import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../cardsApi';

const mainReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
});

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;
