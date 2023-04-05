import CardsList from '../../components/CardsList';
import cardsDB from '../../database/database.json';
import Search from '../../components/Search/Search';
import banner from '../../assets/images/banner-main.jpg';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  const cards = cardsDB;

  return (
    <>
      <div className={styles.main__banner}>
        <img src={banner} alt="banner" className={styles.main__banner_img}/>
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>Explore the world with a photo!</h1>
        <Search />
        <section className={styles.main__cards}>
          <CardsList cards={cards} />
        </section>
      </div>
    </>
  );
};

export default Home;
