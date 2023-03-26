import React, { forwardRef, ReactNode } from 'react';
import { Ref } from '../../../types/types';

interface Props {
  children?: ReactNode,
  type: 'file',
  name: string,
  title?: string,
  placeholder?: string,
  error: string,
  // required: boolean,
  save: (file: string) => void,
  // src: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input ref={ref} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files) {
          props.save(URL.createObjectURL(event.currentTarget.files[0]));
          // props.src(URL.createObjectURL(event.currentTarget.files[0]));
        }
      }
      }
             {...props}
      />
      <p>{props.error}</p>
    </div>
  );
});

export default FormInput;
