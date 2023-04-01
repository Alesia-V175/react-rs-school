import { forwardRef, ReactNode } from 'react';
import { RefSelect } from '../../../types/types';
import styles from './FormSelect.module.scss';

interface Props {
  children?: ReactNode,
  name: string,
  title: string,
  value?: string,
  values: string[],
  options?: string[],
  error: string,
}

const FormSelect = forwardRef<RefSelect, Props>((props, ref) => {
  return (
    <div className={styles.select__wrap}>{props.title}
      <select value={props.value} ref={ref} {...props} className={styles.select}>
        <option hidden></option>
        {props.values.map((value, index) => {
          return (
            <option key={value} value={value}>
              {props.options ? props.options[index] : value}
            </option>
          );
        })}
      </select>
      <p className={styles.error__wrap}>{props.error}</p>
    </div>
  );
});

export default FormSelect;
