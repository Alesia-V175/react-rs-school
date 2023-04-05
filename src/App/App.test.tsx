import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('Component: App', () => {
  it('should render main root', () => {
    render(
      <Router>
        <App />
      </Router>,
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
