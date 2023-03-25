import React, { forwardRef } from 'react';
import { Ref } from '../../../types/types';

interface Props {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testid?: string;
}

const FormInputCheckbox = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div >
      <div>
        <input ref={ref} {...props}/>
        <label htmlFor={props.name}></label>
      </div>
    </div>
  );
});

export default FormInputCheckbox;
