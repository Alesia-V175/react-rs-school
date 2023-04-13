import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import FullCardItem from './FullCardItem';
import { ICardItem } from '../../types/interfaces';
import database from '../../database/database.json';

const data = vitest.fn();
const card: ICardItem = database[0];

describe('Component: FullCardItem', () => {
  beforeEach(() => {
    render(<FullCardItem card={card} close={data} />);
  });

  it('should render correct image', () => {
    expect(screen.getByAltText(card.alt_description)).toBeInTheDocument();
  });

  it('should render right number of likes', () => {
    expect(screen.getByText(card.likes)).toBeInTheDocument();
  });
});
