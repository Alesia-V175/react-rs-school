import { forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { RefSelect } from '../../../types/types';
import styles from './FormSelect.module.scss';

interface IProps {
  children?: ReactNode,
  name: string,
  title: string,
  value?: string,
  values: string[],
  options?: string[],
  error?: FieldError,
}

const FormSelect = forwardRef<RefSelect, IProps>((props, ref): JSX.Element => (
  <div className={styles.select__wrap}>{props.title}
    <select value={props.value} ref={ref} {...props} className={styles.select}>
      <option hidden></option>
      {props.values.map((value, index) => (
        <option key={value} value={value}>
          {props.options ? props.options[index] : value}
        </option>
      ))}
    </select>
    <p className={styles.error__wrap}>
      {props.error && props.error.message}
    </p>
  </div>
));

export default FormSelect;
