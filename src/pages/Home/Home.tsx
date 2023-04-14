import { useSelector } from 'react-redux';
import { useGetCardsListQuery, useGetSearchListCardsQuery } from '../../redux/api/cardsApi';
import { RootState } from '../../redux/store';
import CardsList from '../../components/CardsList';
import Search from '../../components/Search/Search';
import Preloader from '../../components/Preloader';
import banner from '../../assets/images/banner-main.jpg';
import { ICardItem } from '../../types/interfaces';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  const searchStateValue = useSelector<RootState, string>((state) => state.search.stateSearch);
  let dataCards: ICardItem[];
  let isAppLoading;

  if (searchStateValue) {
    const { data, isLoading } = useGetSearchListCardsQuery(searchStateValue);
    isAppLoading = isLoading;
    dataCards = data?.results as ICardItem[];
  } else {
    const { data, isLoading } = useGetCardsListQuery();
    isAppLoading = isLoading;
    dataCards = data as ICardItem[];
  }

  return (
    <>
      <div className={styles.main__banner}>
        <img src={banner} alt="banner" className={styles.main__banner_img}/>
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>Explore the world with a photo!</h1>
        <Search />
        {isAppLoading ? (
          <Preloader />
        ) : (
        <section className={styles.main__cards}>
          <CardsList cards={dataCards}/>
        </section>
        )}
      </div>
    </>
  );
};

export default Home;
