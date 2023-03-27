import React, { forwardRef, ReactNode } from 'react';
import { InputType } from '../../../types/types';
import styles from './FormCheckbox.module.scss';

interface Props {
  children?: ReactNode,
  type: InputType,
  name: string,
  title?: string,
  value?: string,
  error: string,
}

export type Ref = HTMLInputElement;

const FormCheckbox = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.input__wrap}>
      <input ref={ref} {...props} className={styles.input}/>
      <label htmlFor={props.name} className={styles.label}>{props.title}</label>
        </div>
      <p className={styles.error__wrap}>{props.error}</p>
    </div>
  );
});

export default FormCheckbox;
