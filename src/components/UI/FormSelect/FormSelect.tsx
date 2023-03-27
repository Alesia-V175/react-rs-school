import React, { forwardRef, ReactNode } from 'react';
import { RefSelect } from '../../../types/types';
import styles from './FormSelect.module.scss';

interface Props {
  children?: ReactNode,
  name: string,
  title: string,
  value?: string,
  values: string[],
  options?: string[],
}

const FormSelect = forwardRef<RefSelect, Props>((props, ref) => {
  return (
    <div className={styles.select__wrap}>{props.title}
      <select value={props.value} ref={ref} {...props} className={styles.select}>
        {props.values.map((value, index) => {
          return (
            <option key={value} value={value}>
              {props.options ? props.options[index] : value}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default FormSelect;
