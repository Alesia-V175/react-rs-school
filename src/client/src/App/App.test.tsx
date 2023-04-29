import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App';

describe('Component: App', () => {
  it('should render main root', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
