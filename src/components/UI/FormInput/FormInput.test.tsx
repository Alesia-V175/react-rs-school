import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput.js';

describe('Form input type text', () => {
  it('should render input form component', () => {
    render(<FormInput title="testing" type="date" name="test-date" error="error date"/>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});
