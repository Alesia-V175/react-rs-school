import React from 'react';
import OrderForm from '../../components/OrderForm/OrderForm.js';
import FormCardsList from '../../components/FormCardsList/FormCardsList.js';
import { FormCard } from '../../types/types';
import { IFormCards } from '../../types/interfaces';

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
      <>
        <OrderForm onSelect={this.onSelect} data-testid="form"/>
        <FormCardsList items={this.state.items}/>
      </>
    );
  }
}

export default Form;
