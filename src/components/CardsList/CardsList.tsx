import React from 'react';
import { ICardsList } from '../../types/interfaces';
import CardItem from '../CardItem/CardItem.js';

const CardsList = ({ cards }: ICardsList) => {
  return cards?.length ? (
    <>
      {cards?.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </>
  ) : (
    <h3>Sorry, but nothing matched your search terms. Please, try again with another keywords.</h3>
  );
};

export default CardsList;
