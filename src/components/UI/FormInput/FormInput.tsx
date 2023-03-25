import React, { forwardRef, ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  type: 'text' | 'email' | 'date' | 'radio' | 'checkbox',
  name: string,
  title?: string,
  placeholder?: string,
  value?: string,
  // required: boolean,
  error: string,
  pattern?: string
  // src?: string,
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
