import React, { forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { InputType, Ref } from '../../../types/types';
import styles from './FormInput.module.scss';

interface Props {
  children?: ReactNode,
  type?: InputType,
  name?: string,
  title?: string,
  placeholder?: string,
  value?: string,
  error?: FieldError,
  pattern?: string
}

const FormInput = forwardRef<Ref, Props>((props, ref) => (
  <div className={styles.input__wrap}>
    <label htmlFor={props.name} className={styles.label}>{props.title}</label>
    <input ref={ref} {...props} className={styles.input}/>
    <p className={styles.error__wrap}>
      {props.error && props.error.message && (
        <>{props.error.message}</>
      )}
    </p>
  </div>
));

export default FormInput;
