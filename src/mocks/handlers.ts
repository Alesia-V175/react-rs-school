import { rest } from 'msw';
import { API } from '../constants/apiConstants';
import cardsDB from '../database/database.json';

const handlers = [
  rest.get(`${API.API_URL}/photos?per_page=51`, (req, res, context) => {
    return res(
      context.status(200),
      context.json(cardsDB),
    );
  }),

  rest.get(`${API.API_URL}/search/photos?per_page=51&query=flowers`, (req, res, context) => {
    return res(
      context.status(200),
      context.json(cardsDB),
    );
  }),

  rest.get(`${API.API_URL}/photos/lMhGKT9zldk`, (req, res, context) => {
    return res(
      context.status(200),
      context.json(cardsDB[0]),
    );
  }),
];

export default handlers;
