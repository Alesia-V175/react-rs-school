import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form.js';

describe('Header', () => {
  it('Home page should have a banner ', () => {
    render(<Form />);
    expect(screen);
  });
});
