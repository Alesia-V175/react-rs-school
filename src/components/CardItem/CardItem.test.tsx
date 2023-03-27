import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import CardItem from './CardItem.js';
import { ICardItem } from '../../types/interfaces';
import database from '../../database/database.json';

describe('CardItem', () => {
  const card: ICardItem = database[0];

  it('should render correct card item', () => {
    render(<CardItem {...card}/>);
    expect(screen.getByAltText(card.alt_description)).toBeInTheDocument();
    expect(screen.getByText('Created at:')).toBeInTheDocument();
  });
});
