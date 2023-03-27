import React, { forwardRef, ReactNode } from 'react';
import { InputType, Ref } from '../../../types/types';
import styles from './FormInputFile.module.scss';

interface Props {
  children?: ReactNode,
  type: InputType,
  name: string,
  title?: string,
  error: string,
  save: (file: string) => void,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className={styles.input__wrap}>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        title={props.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.currentTarget.files) {
            props.save(URL.createObjectURL(event.currentTarget.files[0]));
          }
        }}
      />
      <p className={styles.error__wrap}>{props.error}</p>
    </div>
  );
});

export default FormInput;