import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Component: OrderForm', () => {
  it('should render form', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText('Search a photo')).toBeInTheDocument();
  });
});
