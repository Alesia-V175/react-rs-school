import { IFormCard } from '../../types/interfaces';
import styles from './FormCardItem.module.scss';

const FormCardItem = ({
  name, email, date, payment, type, confirm, avatar,
}: IFormCard) => (
  <li className={styles.card}>
    <div className={styles.card__img_wrap}>
      <img src={avatar} alt={name} className={styles.card__img}/>
    </div>
    <div><span>Name: </span>{name}</div>
    <div><span>E-mail: </span>{email}</div>
    <div><span>Date: </span>{date}</div>
    <div><span>Payment: </span>{payment}</div>
    <div><span>Type of photo shoot: </span>{type}</div>
    <div><span>Confirmation: </span>{confirm}</div>
  </li>
);

export default FormCardItem;
