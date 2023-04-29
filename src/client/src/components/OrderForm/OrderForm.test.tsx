import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import OrderForm from './OrderForm';

const getFormItems = vitest.fn();

describe('Component: OrderForm', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        render(<OrderForm setItems={getFormItems}/>)
      </Provider>,
    );
  });

  it('should render form', async () => {
    const formValue = await screen.getByText('cash');
    expect(formValue).toBeInTheDocument();
  });

  it('should create button', async () => {
    const submitButton = screen.getByTestId('submit');

    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });

  it('should date input', async () => {
    const submitButton = screen.getByTestId('submit');
    const inputDate = screen.getByTestId('date');

    fireEvent.input(inputDate, new Date());
    fireEvent.click(submitButton);

    expect(inputDate).toBeInTheDocument();
  });

  it('should create email input', async () => {
    const submitButton = screen.getByTestId('submit');
    const inputEmail = screen.getByTestId('email');

    fireEvent.click(submitButton);

    expect(inputEmail).toBeInTheDocument();
  });
});
