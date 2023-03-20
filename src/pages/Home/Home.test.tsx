import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home.js';

describe('Header', () => {
  it('Home page should have a banner ', () => {
    render(<Home />);
    expect(screen.getByAltText('banner')).toBeInTheDocument();
  });
});
