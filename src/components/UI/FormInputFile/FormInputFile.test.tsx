import React from 'react';
import { vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldError } from 'react-hook-form';
import FormInputFile from './FormInputFile';
import { InputType } from '../../../types/types';

interface Props {
  type: InputType,
  name?: string,
  title?: string,
  error?: FieldError,
  save: (file: string) => void,
}
describe('Component: FormSelect', () => {
  it('should render error', () => {
    const prop: Props = {
      save: vitest.fn(),
      type: 'file',
      title: 'File value',
      name: 'file',
    };

    render(
      <FormInputFile {...prop} />,
    );

    const options = screen.getByText('File value');
    expect(options).toBeInTheDocument();
  });
});

describe('Component: FormSelect', () => {
  it('should render error', async () => {
    const prop: Props = {
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
});

describe('Component: FormSelect', () => {
  it('should render error', () => {
    const prop: Props = {
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
