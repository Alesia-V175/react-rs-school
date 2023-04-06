import { forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { InputType, Ref } from '../../../types/types';
import styles from './FormCheckbox.module.scss';

interface IProps {
  children?: ReactNode,
  type: InputType,
  name?: string,
  title?: string,
  value?: string,
  error?: FieldError,
}

const FormCheckbox = forwardRef<Ref, IProps>((props, ref): JSX.Element => (
  <div className={styles.wrap}>
    <div className={styles.input__wrap}>
    <input ref={ref} {...props} className={styles.input}/>
    <label htmlFor={props.name} className={styles.label}>{props.title}</label>
      </div>
    <p className={styles.error__wrap}>
      {props.error && props.error.message}
    </p>
  </div>
));

export default FormCheckbox;
