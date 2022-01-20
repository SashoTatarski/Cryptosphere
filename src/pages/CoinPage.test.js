import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import { render } from '../test.utils';
import React from 'react';
import CoinPage from './CoinPage';

describe('Coin page', () => {
  beforeEach(() => {
    render(<CoinPage />, {

    });
  });

  it('first name is visible on the screen', () => {
    expect(screen.getByText('3 Months')).toBeInTheDocument();
  });
});
