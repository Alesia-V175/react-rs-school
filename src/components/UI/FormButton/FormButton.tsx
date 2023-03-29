import { FC } from 'react';
import { ButtonType } from '../../../types/types';
import styles from './FormButton.module.scss';

interface IFormButton {
  children: string,
  disabled?: boolean,
  type: ButtonType,
  onClick?: () => void,
}

const FormButton: FC<IFormButton> = (props) => (
  <button {...props} className={ styles.button }>
    { props.children }
  </button>
);

export default FormButton;
