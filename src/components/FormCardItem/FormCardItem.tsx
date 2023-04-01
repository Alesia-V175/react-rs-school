import React from 'react';
import { IFormCard } from '../../types/interfaces';
import styles from './FormCardItem.module.scss';

const FormCardItem = (data: IFormCard) => {
  const date = new Date(data.date).toISOString().split('T')[0];

  return (
    <li className={styles.card}>
      <div className={styles.card__img_wrap}>
        <img src={data.file} alt={data.name} className={styles.card__img}/>
      </div>
      <div><span>Name: </span>{data.name}</div>
      <div><span>E-mail: </span>{data.email}</div>
      <div><span>Date: </span>{date}</div>
      <div><span>Payment: </span>{data.radio}</div>
      <div><span>Type of photo shoot: </span>{data.type}</div>
      <div><span>Confirmation: </span>
        {data.checkbox && (
          <>Yes</>
        )}
      </div>
    </li>
  );
};

export default FormCardItem;
