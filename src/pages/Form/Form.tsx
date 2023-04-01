import React, { FC, useState } from 'react';
import OrderForm from '../../components/OrderForm/OrderForm';
import FormCardsList from '../../components/FormCardsList/FormCardsList';
import { IFormCard } from '../../types/interfaces';
import styles from './Form.module.scss';

const Form: FC = () => {
  const [items, setItems] = useState<IFormCard[]>([]);

  const getFormItems = (data: IFormCard) => {
    setItems([data, ...items]);
  };

  return (
    <div className={styles.form__content}>
      <h1 className={styles.form__title}>Order Your Photo Shoot!</h1>
      <OrderForm setItems={getFormItems} />
      <FormCardsList items={items}/>
    </div>
  );
};

export default Form;
