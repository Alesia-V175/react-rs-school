import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputRadio from './FormInputRadio.js';

describe('Form input type text', () => {
  it('should render input form component', () => {
    render(<FormInputRadio type="radio" value="cash" name="payment" title="choose payment"/>);

    expect(screen.getByText('choose payment')).toBeInTheDocument();
  });
});
