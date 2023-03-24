import React, { FC, RefObject } from 'react';

interface IFormInput {
  type: string,
  name: string,
  placeholder?: string,
  icon?: string | null,
  ref?: RefObject<HTMLInputElement> | null;
}

const FormInput: FC<IFormInput> = (props) => {
  return (
    <input {...props}/>
  );
};

export default FormInput;
