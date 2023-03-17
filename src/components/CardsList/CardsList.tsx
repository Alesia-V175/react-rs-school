import React from 'react';
import { ICardsList } from '../../types/interfaces';
import CardItem from '../CardItem/CardItem.js';

const CardsList = ({ cards }: ICardsList) => {
  return cards?.length ? (
    <div >
      {cards?.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  ) : (
    <h3>Nothing found</h3>
  );
};

export default CardsList;
