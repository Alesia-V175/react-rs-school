import { IFormCardItem } from '../../types/interfaces';

const FormCardItem = ({
  name, email, date, payment, type, confirm, avatar,
}: IFormCardItem) => {
  return (
    <li>
      <img src={avatar} alt=""/>
      <div>{name}</div>
      <div>{email}</div>
      <div>{date}</div>
      <div>{payment}</div>
      <div>{type}</div>
      <div>{confirm}</div>
    </li>
  );
};

export default FormCardItem;
