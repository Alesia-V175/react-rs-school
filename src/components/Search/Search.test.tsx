import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import Search from './Search';

describe('Component: OrderForm', () => {
  const data = vitest.fn();

  it('should render form', () => {
    render(<Search searchCards={data}/>);

    expect(screen.getByPlaceholderText('Search a photo')).toBeInTheDocument();
  });
});
