import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import { render } from '../../tests';
import CoinPage from './CoinPage';

describe('Coin page', () => {
  beforeEach(() => {
    render(<CoinPage />, {
      initialState: {
        auth: {
          user: {
            isLoggedIn: true,
            user: {
              email: 'test@gmail.com',
              firstName: 'Deshka',
              lastName: 'Ilieva'
            }
          }
        }
      }
    });
  });

  it('24 h visible on the screen', async () => {
    await waitFor(() => {
      expect(screen.getByText(/24 hours/i)).toBeInTheDocument();
    });
  });
});
