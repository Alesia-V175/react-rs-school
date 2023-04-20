import { forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { InputType, Ref } from '../../../types/types';
import styles from './FormInputRadio.module.scss';

interface IProps {
  children?: ReactNode,
  type: InputType,
  name?: string,
  value?: string,
  error?: FieldError,
  defaultChecked?: boolean
}

const FormInputRadio = forwardRef<Ref, IProps>((props, ref): JSX.Element => (
  <div className={styles.input__wrap}>
    <div>
      <input ref={ref} {...props} value={props.value} className={styles.input__wrap_radio}/>
      <label htmlFor={props.value}>{props.value}</label>
    </div>
    <p className={styles.error__wrap}>
      {props.error && props.error.message}
    </p>
  </div>
));

export default FormInputRadio;
