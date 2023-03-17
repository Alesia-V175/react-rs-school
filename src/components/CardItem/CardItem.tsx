import React from 'react';
import { ICardItem } from '../../types/interfaces';

const CardItem = (card: ICardItem) => {
  return (
    <div>
      <img src={card.urls.small_s3} alt=""/>
    </div>
  );
};

export default CardItem;
