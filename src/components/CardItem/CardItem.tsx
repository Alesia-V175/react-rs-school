import React, { useState } from 'react';
import { ICardItem } from '../../types/interfaces';
import likeIcon from '../../assets/icons/heart.svg';
import Api from '../../Api/Api';
import FullCardItem from '../FullCardItem';
import styles from './CardItem.module.scss';

const CardItem = (card: ICardItem): JSX.Element => {
  const [cardDetailed, setCardDetailed] = useState<ICardItem | undefined>();

  const [date] = new Date(card.created_at).toISOString().split('T');

  const handleClick = async () => {
    if (!cardDetailed) {
      const response = await Api.getCard(card.id);
      setCardDetailed(response);
    }
  };

  return (
    <div className={styles.card__wrap} onClick={handleClick}>
      {cardDetailed
        && (
          <FullCardItem cardItem={cardDetailed} close={() => setCardDetailed(undefined)}/>
        )
      }
      <div className={styles.card__photo}>
        <img src={card.urls.small} alt={card.alt_description} className={styles.card__photo_img}/>
      </div>
      <div className={styles.card__description}>
        <p>Created at:
          <span className={styles.card__description_detailed}> {date}</span>
        </p>
        <p>Description:
          <span className={styles.card__description_detailed}> {card.alt_description}</span>
        </p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.likes__wrap}>
          <img src={likeIcon} alt="like" className={styles.likes__wrap_img}/>
          <span>{card.likes}</span>
        </div>
        <div className={styles.color__wrap}>
          <label><span className={styles.card__description}>Color: </span>{card.color}</label>
          <input type="color" value={card.color} className={styles.color__input} readOnly />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
