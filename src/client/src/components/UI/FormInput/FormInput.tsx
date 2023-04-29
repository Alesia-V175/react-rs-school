import { forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { InputType, Ref } from '../../../types/types';
import styles from './FormInput.module.scss';

interface IProps {
  children?: ReactNode,
  type?: InputType,
  name?: string,
  title?: string,
  placeholder?: string,
  value?: string,
  error?: FieldError,
  pattern?: string
}

const FormInput = forwardRef<Ref, IProps>((props, ref): JSX.Element => (
  <div className={styles.input__wrap}>
    <label htmlFor={props.name} className={styles.label}>{props.title}</label>
    <input ref={ref} {...props} className={styles.input}/>
    <p className={styles.error__wrap}>
      {props.error && props.error.message}
    </p>
  </div>
));

export default FormInput;
