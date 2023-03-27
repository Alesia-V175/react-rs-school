import React from 'react';
import { ICardItem } from '../../types/interfaces';
import CardsList from '../../components/CardsList/CardsList.js';
import cardsDB from '../../database/database.json';
import Search from '../../components/Search/Search.js';
import banner from '../../assets/images/banner-main.jpg';
import styles from './Home.module.scss';

class Home extends React.Component<object, { cards: ICardItem[] }> {
  state = {
    cards: [],
  };

  componentDidMount() {
    const db: ICardItem[] = cardsDB;
    this.setState({ cards: db });
  }

  render() {
    return (
      <>
        <div className={styles.main__banner}>
          <img src={banner} alt="banner" className={styles.main__banner_img}/>
        </div>
        <div className={styles.main__content}>
          <h1 className={styles.main__title}>Explore the world with a photo!</h1>
          <Search />
          <section className={styles.main__cards}>
            <CardsList cards={this.state.cards} />
          </section>
        </div>
      </>
    );
  }
}

export default Home;
