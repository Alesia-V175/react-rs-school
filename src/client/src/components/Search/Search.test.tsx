import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Search from './Search';

describe('Component: OrderForm', () => {
  it('should render form', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(screen.getByPlaceholderText('Search a photo')).toBeInTheDocument();
  });
});
