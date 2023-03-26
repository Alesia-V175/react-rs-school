import React, { FC } from 'react';
import styles from './FormButton.module.scss';

interface IFormButton {
  children: string,
  disabled?: boolean,
  type: 'button' | 'reset' | 'submit',
  onClick?: () => void,
}

const FormButton: FC<IFormButton> = (props) => {
  return (
    <button {...props} className={ styles.button }>
      { props.children }
    </button>
  );
};

export default FormButton;
