import { vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldError } from 'react-hook-form';
import FormInputFile from './FormInputFile';
import { InputType } from '../../../types/types';

interface IProps {
  type: InputType,
  name?: string,
  title?: string,
  error?: FieldError,
  save: (file: string) => void,
}
describe('Component: FormInputFile', () => {
  it('should render correct file input', async () => {
    const prop: IProps = {
      save: vitest.fn(),
      type: 'file',
      title: 'File test title',
      name: 'file',
    };

    render(
      <FormInputFile {...prop} />,
    );

    const options = screen.getByText('File test title');
    expect(options).toBeInTheDocument();
  });

  it('should render with error', () => {
    const prop: IProps = {
      save: vitest.fn(),
      type: 'file',
      title: 'File test title',
      name: 'file',
      error: {
        type: '',
        message: 'error',
      },
    };

    render(
      <FormInputFile {...prop} />,
    );

    const options = screen.getByText('error');
    expect(options).toBeInTheDocument();
  });
});
