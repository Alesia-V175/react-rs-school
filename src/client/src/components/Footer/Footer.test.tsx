import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

describe('Component: Footer', () => {
  it('should render correct text inside footer', () => {
    render(<Footer />);

    expect(screen.getByText('© by Alesia Sokolovskaya 2023')).toBeInTheDocument();
  });
});
