import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Component: Form', () => {
  it('Should have correct form value ', () => {
    render(<Form />);

    expect(screen.getByText('Order Your Photo Shoot!')).toBeInTheDocument();
  });
});
