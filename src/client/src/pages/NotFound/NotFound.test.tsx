import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

describe('Component: NotFound', () => {
  it('should have correct value ', () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );

    expect(screen.getByAltText('page not found')).toBeInTheDocument();
  });
});
