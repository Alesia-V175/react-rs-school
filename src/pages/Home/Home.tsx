import { useEffect, useState } from 'react';
import Api from '../../Api/Api';
import CardsList from '../../components/CardsList';
import Search from '../../components/Search/Search';
import banner from '../../assets/images/banner-main.jpg';
import { ICardItem } from '../../types/interfaces';
import Preloader from '../../components/Preloader';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState<ICardItem[]>([]);

  const getSearchCards = async (query: string) => {
    setLoading(true);
    const searchCardList = await Api.searchListCards(query);
    setCardList(searchCardList);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    async function getData(): Promise<void> {
      const cards: ICardItem[] = await Api.getListCards();
      setCardList(cards);
    }

    getData();
  }, []);

  return (
    <>
      <div className={styles.main__banner}>
        <img src={banner} alt="banner" className={styles.main__banner_img}/>
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>Explore the world with a photo!</h1>
        <Search searchCards={getSearchCards}/>
        {loading ? (
          <Preloader />
        ) : (
        <section className={styles.main__cards}>
          <CardsList cards={cardList}/>
        </section>
        )}
      </div>
    </>
  );
};

export default Home;
