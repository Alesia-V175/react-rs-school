import FormCardItem from '../FormCardItem/FormCardItem';
import { IFormCards } from '../../types/interfaces';
import styles from './FormCardList.module.scss';

const FormCardsList = ({ items }: IFormCards) => {
  if (items.length) {
    return (
      <ul className={styles.cardList}>
        {items.map((card) => (
          <FormCardItem key={card.name + (Math.random() * 10)} {...card} />
        ))}
      </ul>
    );
  }
  return null;
};

export default FormCardsList;
