import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputRadio from './FormInputRadio.js';

describe('Form input type radio', () => {
  it('should render input form component', () => {
    render(<FormInputRadio type="radio" value="cash" name="payment"/>);

    expect(screen);
  });
});
