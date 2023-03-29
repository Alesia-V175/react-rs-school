import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Component: Header', () => {
  it('should render a banner inside', () => {
    render(<Home />);
    expect(screen.getByAltText('banner')).toBeInTheDocument();
  });
});
