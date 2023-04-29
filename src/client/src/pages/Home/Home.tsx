import { useSelector } from 'react-redux';
import { useGetSearchListCardsQuery } from '../../redux/configuration/cardsApi';
import { RootState } from '../../redux/store';
import CardsList from '../../components/CardsList';
import Search from '../../components/Search/Search';
import Preloader from '../../components/Preloader';
import { ICardItem } from '../../types/interfaces';
import { InitStateValue } from '../../constants/constants';
import banner from '../../assets/images/banner-main.jpg';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  let searchStateValue = useSelector<RootState, string>((state) => state.search.stateSearch);

  if (!searchStateValue) {
    searchStateValue = InitStateValue.state;
  }

  const { data, isLoading } = useGetSearchListCardsQuery(searchStateValue);

  return (
    <>
      <div className={styles.main__banner}>
        <img src={banner} alt="banner" className={styles.main__banner_img}/>
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>Explore the world with a photo!</h1>
        <Search />
        {isLoading ? (
          <Preloader />
        ) : (
        <section className={styles.main__cards}>
          <CardsList cards={data?.results as ICardItem[]}/>
        </section>
        )}
      </div>
    </>
  );
};

export default Home;
