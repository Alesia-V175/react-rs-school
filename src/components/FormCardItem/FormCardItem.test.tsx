import { screen, render } from '@testing-library/react';
import { IFormCardItem } from '../../types/interfaces';
import FormCardItem from './FormCardItem.js';

const card: IFormCardItem = {
  name: 'Alisa',
  email: 'alisa@gmail.com',
  date: '2023-04-01',
  payment: 'card',
  type: 'Wedding',
  confirm: 'yes',
  avatar: 'https://img.championat.com/c/900x900/news/big/c/s/avatar-3-avatar-4-i-avatar-5-kogda-zhdat_16724205581265002556.jpg',
};

describe('Form card render', () => {
  it('should render a card component', () => {
    render(<FormCardItem {...card} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
