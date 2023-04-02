import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('Page: About', () => {
  it('Should have correct about value ', () => {
    render(<About />);

    expect(screen.getByText('All about us')).toBeInTheDocument();
  });
});
