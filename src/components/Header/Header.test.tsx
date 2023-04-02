import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Component: Footer', () => {
  it('should render correct text inside footer', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByAltText('Photo\'s Time')).toBeInTheDocument();
  });
});
