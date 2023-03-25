import React, { forwardRef, ReactNode } from 'react';
import { RefSelect } from '../../../types/types';

interface Props {
  children?: ReactNode,
  name: string,
  title: string,
  value?: string,
  values: string[],
  options?: string[],
  // required: boolean
}

const FormSelect = forwardRef<RefSelect, Props>((props, ref) => {
  return (
    <div>{props.title}
      <select value={props.value} ref={ref} {...props}>
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
