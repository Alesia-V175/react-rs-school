import { screen, render } from '@testing-library/react';
import FormCardsList from './FormCardsList';
import { IFormCard } from '../../types/interfaces';

const cards: IFormCard[] = [
  {
    name: 'Slava',
    email: 'slavaa@gmail.com',
    date: new Date('2023-05-07'),
    radio: 'card',
    type: 'Animal',
    checkbox: true,
    file: 'https://img.championat.com/c/900x900/news/big/c/s/avatar-3-avatar-4-i-avatar-5-kogda-zhdat_16724205581265002556.jpg',
  },
  {
    name: 'Olga',
    email: 'olga@gmail.com',
    date: new Date('2023-08-09'),
    radio: 'cash',
    type: 'Wedding',
    checkbox: true,
    file: 'https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
  },
  {
    name: 'Alisa',
    email: 'alisa@gmail.com',
    date: new Date('2023-04-01'),
    radio: 'card',
    type: 'Wedding',
    checkbox: true,
    file: 'https://img.championat.com/c/900x900/news/big/c/s/avatar-3-avatar-4-i-avatar-5-kogda-zhdat_16724205581265002556.jpg',
  },
];

describe('Component: FormCardList', () => {
  it('should render list of all form cards', () => {
    render(<FormCardsList items={ cards } />);

    expect(cards.length).toBe(3);
    expect(screen.getByText(cards[1].radio)).toBeInTheDocument();
  });
});
