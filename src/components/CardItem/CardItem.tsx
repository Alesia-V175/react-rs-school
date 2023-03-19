import React from 'react';
import { ICardItem } from '../../types/interfaces';
import styles from './CardItem.module.scss';

const CardItem = (card: ICardItem) => {
  return (
    <>
      <div className={styles.card__wrap}>
        <div className={styles.card__photo}>
          <img src={card.urls.small} alt={card.alt_description} className={styles.card__photo_img}/>
        </div>
        <div className={styles.card__description}>
          <p>Created at:
            <span className={styles.card__description_detailed}> {card.created_at}</span>
          </p>
          <p>Description:
            <span className={styles.card__description_detailed}> {card.alt_description}</span>
          </p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.likes__wrap}>
            <img src='src/assets/icons/heart.svg' alt="like" className={styles.likes__wrap_img}/>
            <span>{card.likes}</span>
          </div>
          <div className={styles.color__wrap}>
            <label><span className={styles.card__description}>Color: </span>{card.color}</label>
            <input type="color" value={card.color} className={styles.color__input} readOnly />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
