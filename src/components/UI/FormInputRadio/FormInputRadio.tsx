import React, { forwardRef, ReactNode } from 'react';
import { InputType, Ref } from '../../../types/types';
import styles from './FormInputRadio.module.scss';

interface Props {
  children?: ReactNode,
  type: InputType,
  name: string,
  value: string,
  error?: string,
  defaultChecked?: boolean
}

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className={styles.input__wrap}>
      <input ref={ref} {...props} value={props.value} className={styles.input__wrap_radio}/>
      <label htmlFor={props.value}>{props.value}</label>
      <p className={styles.error__wrap}>{props.error}</p>
    </div>
  );
});

export default FormInput;
