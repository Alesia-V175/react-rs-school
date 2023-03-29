import React from 'react';
import OrderForm from '../../components/OrderForm/OrderForm';
import FormCardsList from '../../components/FormCardsList/FormCardsList';
import { IFormCard, IFormCards } from '../../types/interfaces';
import styles from './Form.module.scss';

class Form extends React.Component {
  state: IFormCards = {
    items: [],
  };

  private onSelect = (card: IFormCard) => {
    const allCards: IFormCard[] = [...this.state.items];

    allCards.push(card);

    this.setState({
      items: allCards,
    });
  };

  render() {
    return (
      <div className={styles.form__content}>
        <h1 className={styles.form__title}>Order Your Photo Shoot!</h1>
        <OrderForm onSelect={this.onSelect} />
        <FormCardsList items={this.state.items}/>
      </div>
    );
  }
}

export default Form;
