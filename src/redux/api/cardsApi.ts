import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BaseUrl from '../../constants/apiConstants';
import { ICardItem, ISearchParams } from '../../types/interfaces';
import { RequestMethod } from '../../types/enums';

const common = {
  method: RequestMethod.GET,
  headers: {
    Authorization: `Client-ID ${BaseUrl.ACCESS_KEY}`,
  },
};

const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl.API_URL,
  }),
  endpoints: (builder) => ({
    getSearchListCards: builder.query<ISearchParams, string>({
      query: (search: string) => ({
        url: 'search/photos?per_page=51',
        params: { query: search },
        ...common,
      }),
    }),
    getCardsList: builder.query<ICardItem[], string>({
      query: () => ({
        url: 'photos?per_page=51',
        ...common,
      }),
    }),
    getCard: builder.query<ICardItem, string>({
      query: (id: string) => ({
        url: `photos/${id}`,
        ...common,
      }),
    }),
  }),
});

export const { useGetSearchListCardsQuery, useGetCardsListQuery, useGetCardQuery } = cardsApi;

export { cardsApi };
