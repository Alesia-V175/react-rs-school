import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputRadio from './FormInputRadio';

describe('Component: FormInputRadio', () => {
  it('should render input form component', () => {
    render(<FormInputRadio type="radio" value="cash" name="payment"/>);
    expect(screen.getByText('cash')).toBeInTheDocument();
  });
});
