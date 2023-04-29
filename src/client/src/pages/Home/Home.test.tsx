import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from './Home';

describe('Component: Home', () => {
  it('should render a banner inside', () => {
    render(
      <Provider store={store}>
        <Home/>
      </Provider>,
    );
    expect(screen.getByAltText('banner')).toBeInTheDocument();
  });
});
