import FormCardItem from '../FormCardItem/FormCardItem.js';
import { IFormCards } from '../../types/interfaces';

const FormCardsList = ({ items }: IFormCards) => {
  if (items.length) {
    return (
      <ul>
        {items.map((card) => (
          <FormCardItem key={card.name + (Math.random() * 10)} {...card}/>
        ))}
      </ul>
    );
  }
  return null;
};

export default FormCardsList;
