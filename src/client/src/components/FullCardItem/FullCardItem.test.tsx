import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import FullCardItem from './FullCardItem';
import { ICardItem } from '../../types/interfaces';
import database from '../../database/database.json';

const data = vitest.fn();
const card: ICardItem = database[0];

describe('Component: FullCardItem', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <FullCardItem cardItem={card} close={data} />)
      </Provider>,
    );
  });

  it('should render correct image', async () => {
    const cardImage = await screen.findAllByRole('img');
    expect(cardImage).toHaveLength(5);
  });
});
