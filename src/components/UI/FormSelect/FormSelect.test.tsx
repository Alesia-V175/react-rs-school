import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSelect from './FormSelect';

describe('Component: FormSelect', () => {
  const list = ['one', 'two', 'three', 'four', 'five'];

  it('should render select component', () => {
    render(
      <FormSelect name="select" title="Select value" values={list}/>,
    );

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(5);
  });
});
