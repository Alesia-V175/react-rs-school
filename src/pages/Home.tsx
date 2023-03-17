import React from 'react';
import Api from '../Api/Api';
import { ICardItem } from '../types/interfaces';
import CardsList from '../components/CardsList/CardsList.js';
import cardsDB from '../Database/database.json';

class Home extends React.Component<object, { cards: ICardItem[] }> {
  state = {
    cards: [],
  };

  componentDidMount() {
    const db: ICardItem[] = cardsDB;
    this.setState({ cards: db });
  }

  private static async getAllCards() {
    const res = await Api.getListCards();
    return res;
  }

  render() {
    return (
      <section>
        <h1>Home is Home</h1>
        <CardsList cards={this.state.cards} />
      </section>
    );
  }
}

export default Home;
