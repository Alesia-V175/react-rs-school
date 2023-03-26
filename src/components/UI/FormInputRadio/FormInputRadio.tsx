import React, { forwardRef, ReactNode } from 'react';
import { InputType, Ref } from '../../../types/types';

interface Props {
  children?: ReactNode,
  type: InputType,
  name: string,
  title: string,
  value: string,
  error?: string,
}

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div>{props.title}
      <label htmlFor={props.value}>{props.value}</label>
      <input ref={ref} {...props} value={props.value}/>
      <p>{props.error}</p>
    </div>
  );
});

export default FormInput;
