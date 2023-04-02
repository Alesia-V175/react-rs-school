import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('Component: Footer', () => {
  it('should render correct text inside footer', () => {
    render(
      <Router>
        <App />
      </Router>,
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
