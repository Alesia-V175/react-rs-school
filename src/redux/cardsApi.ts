import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BaseUrl from '../constants/apiConstants';
import { ICardItem } from '../types/interfaces';

const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl.API_URL,
  }),
  endpoints: (builder) => ({
    getCardsList: builder.query<ICardItem[], string>({
      query: () => ('photos?per_page=51'),
    }),
    getSearchListCards: builder.query<ICardItem[], string>({
      query: (search) => ({
        url: 'search/photos?per_page=51',
        params: { query: search },
      }),
    }),
    getCard: builder.query<ICardItem, string>({
      query: (id) => (`photos/${id}`),
    }),
  }),
});

export const { useGetCardsListQuery } = cardsApi;

export { cardsApi };
