import { ICardsList } from '../../types/interfaces';
import CardItem from '../CardItem';
import styles from './CardList.module.scss';

const CardsList = ({ cards }: ICardsList): JSX.Element => {
  if (cards?.length) {
    return (
      <section className={styles.card__list}>
        {cards?.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </section>
    );
  }

  return (
    <h3 className={styles.error__message}>
      Sorry, but nothing matched your search terms. Please, try again with another keywords.
    </h3>
  );
};

export default CardsList;
