import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Form from './Form';

describe('Component: Form', () => {
  it('Should have correct form value ', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    expect(screen.getByText('Order Your Photo Shoot!')).toBeInTheDocument();
  });
});
