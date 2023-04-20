import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Component: Header', () => {
  it('should render correct header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByAltText('Photo\'s Time')).toBeInTheDocument();
  });
});
