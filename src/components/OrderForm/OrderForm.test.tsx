import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import OrderForm from './OrderForm';

const getFormItems = vitest.fn();

describe('Component: OrderForm', () => {
  beforeEach(() => {
    render(<OrderForm setItems={getFormItems} />);
  });

  it('should render form', () => {
    expect(screen.getByText('cash')).toBeInTheDocument();
  });

  it('should create button', () => {
    const submitButton = screen.getByTestId('submit');

    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });

  it('should date input', () => {
    const submitButton = screen.getByTestId('submit');
    const inputDate = screen.getByTestId('date');

    fireEvent.input(inputDate, new Date());
    fireEvent.click(submitButton);

    expect(inputDate).toBeInTheDocument();
  });

  it('should create email input', () => {
    const submitButton = screen.getByTestId('submit');
    const inputEmail = screen.getByTestId('email');

    fireEvent.click(submitButton);

    expect(inputEmail).toBeInTheDocument();
  });
});
