import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../../redux/hooks/useActions';
import { RootState } from '../../redux/store';
import OrderForm from '../../components/OrderForm';
import FormCardsList from '../../components/FormCardsList';
import { IFormCard } from '../../types/interfaces';
import styles from './Form.module.scss';

const Form: FC = (): JSX.Element => {
  const formCardList = useSelector<RootState, IFormCard[]>((state) => state.form);
  const { addCard } = useActions();

  const getFormItems = (data: IFormCard) => {
    addCard(data);
  };

  return (
    <div className={styles.form__content}>
      <h1 className={styles.form__title}>Order Your Photo Shoot!</h1>
      <OrderForm setItems={getFormItems} />
      <FormCardsList items={formCardList}/>
    </div>
  );
};

export default Form;
