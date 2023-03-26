import React, { forwardRef, ReactNode } from 'react';
import { InputType } from '../../../types/types';

interface Props {
  children?: ReactNode,
  type: InputType,
  name: string,
  title?: string,
  placeholder?: string,
  value?: string,
  error: string,
  pattern?: string
}

export type Ref = HTMLInputElement;

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input ref={ref} {...props}/>
      <p>{props.error}</p>
    </div>
  );
});

export default FormInput;
