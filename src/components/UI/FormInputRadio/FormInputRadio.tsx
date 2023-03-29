import { forwardRef, ReactNode } from 'react';
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

const FormInputRadio = forwardRef<Ref, Props>((props, ref) => (
  <div className={styles.input__wrap}>
    <div>
      <input ref={ref} {...props} value={props.value} className={styles.input__wrap_radio}/>
      <label htmlFor={props.value}>{props.value}</label>
    </div>
    <p className={styles.error__wrap}>{props.error}</p>
  </div>
));

export default FormInputRadio;
