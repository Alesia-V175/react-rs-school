import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

describe('Form input type text', () => {
  it('should render input form component', () => {
    render(<FormInput title="testing" type="date" name="test-date"/>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});
