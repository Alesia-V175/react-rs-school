import React from 'react';
import OrderForm from '../../components/OrderForm/OrderForm.js';
import FormCardsList from '../../components/FormCardsList/FormCardsList.js';
import { FormCard } from '../../types/types';
import { IFormCards } from '../../types/interfaces';
import styles from './Form.module.scss';

class Form extends React.Component {
  state: IFormCards = {
    items: [],
  };

  constructor(props: string) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(card: FormCard): void {
    const allCards: FormCard[] = [...this.state.items];

    allCards.push(card);

    this.setState({
      items: allCards,
    });
  }

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
