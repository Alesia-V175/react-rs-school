import { FieldError } from 'react-hook-form';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';
import { InputType } from '../../../types/types';

describe('Component: FormInput', () => {
  it('should render input form', () => {
    render(<FormInput title="testing" type="date" name="test-date"/>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});

interface IProps {
  type: InputType,
  name: string,
  title: string,
  error?: FieldError,
}

describe('Component: FormInput', () => {
  it('should render input with correct props', () => {
    const prop: IProps = {
      type: 'date',
      title: 'testing',
      name: 'test-date',
    };

    render(<FormInput {...prop}/>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});

describe('Component: FormInput', () => {
  it('should render input form component with error', () => {
    const prop: IProps = {
      type: 'date',
      title: 'testing',
      name: 'test-date',
      error: {
        type: '',
        message: 'test-error',
      },
    };

    render(<FormInput {...prop}/>);

    expect(screen.getByText('testing')).toBeInTheDocument();
    expect(screen.getByText('test-error')).toBeInTheDocument();
  });
});
