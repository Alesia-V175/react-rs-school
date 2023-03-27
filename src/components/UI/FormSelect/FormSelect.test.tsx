import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSelect from './FormSelect.js';

describe('Select option', () => {
  const list = ['one', 'two', 'three', 'four', 'five'];

  it('should render select component', () => {
    render(
      <FormSelect name="select" title="Select value" values={list} error="error test"/>,
    );

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(5);
  });
});
