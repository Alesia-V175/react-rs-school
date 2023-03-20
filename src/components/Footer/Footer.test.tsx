import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import Footer from './Footer.js';

describe('Footer', () => {
  it('render footer', () => {
    render(<Footer />);

    expect(screen.getByText('© by Alesia Sokolovskaya 2023')).toBeInTheDocument();
  });
});
