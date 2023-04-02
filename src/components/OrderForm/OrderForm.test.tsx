import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import OrderForm from './OrderForm';

const getFormItems = vitest.fn();
describe('Component: OrderForm', () => {
  it('should render form', () => {
    render(<OrderForm setItems={getFormItems} />);

    expect(screen.getByText('cash')).toBeInTheDocument();
  });
});

describe('Component: OrderForm', () => {
  it('should create button', () => {
    render(<OrderForm setItems={getFormItems} />);

    const submitButton = screen.getByTestId('submit');

    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });
});

describe('Component: OrderForm', () => {
  it('should date input', () => {
    render(<OrderForm setItems={getFormItems} />);

    const submitButton = screen.getByTestId('submit');
    const inputDate = screen.getByTestId('date');

    fireEvent.input(inputDate, new Date());

    fireEvent.click(submitButton);

    expect(inputDate).toBeInTheDocument();
  });
});

describe('Component: OrderForm', () => {
  it('should create email input', () => {
    render(<OrderForm setItems={getFormItems} />);

    const submitButton = screen.getByTestId('submit');
    const inputEmail = screen.getByTestId('email');

    fireEvent.click(submitButton);

    expect(inputEmail).toBeInTheDocument();
  });
});
