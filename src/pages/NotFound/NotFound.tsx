import { Link } from 'react-router-dom';
import imageNotFound from '../../assets/images/not-found.jpg';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <img src={imageNotFound} alt="page not found" className={styles.container__image} />
    <div className={styles.container__button}>
     <Link to="/" className={styles.container__link}>Go home</Link>
    </div>
  </div>
);

export default NotFound;
