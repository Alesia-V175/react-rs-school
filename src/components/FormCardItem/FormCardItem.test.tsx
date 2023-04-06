import { screen, render } from '@testing-library/react';
import { IFormCard } from '../../types/interfaces';
import FormCardItem from './FormCardItem';

const card: IFormCard = {
  name: 'Alisa',
  email: 'alisa@gmail.com',
  date: new Date('2023-04-01'),
  radio: 'card',
  type: 'Wedding',
  checkbox: true,
  file: 'https://img.championat.com/c/900x900/news/big/c/s/avatar-3-avatar-4-i-avatar-5-kogda-zhdat_16724205581265002556.jpg',
};

describe('Component: FormCardItem', () => {
  it('should render a correct card component', () => {
    render(<FormCardItem {...card} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
