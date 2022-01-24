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

  it('24 h option visible on the screen', async () => {
    await waitFor(() => expect(screen.getByText(/24 hours/i)));
  });
  it('30 days option visible on the screen', async () => {
    await waitFor(() => expect(screen.getByText(/30 days/i)).toBeInTheDocument());
  });
  it('3 months option visible on the screen', async () => {
    await waitFor(() => expect(screen.getByText(/3 months/i)).toBeInTheDocument());
  });
  it('1 year option visible on the screen', async () => {
    await waitFor(() => expect(screen.getByText(/1 year/i)).toBeInTheDocument());
  });
  it('rank is  visible on the screen', async () => {
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: /rank:/i })).toBeInTheDocument()
    );
  });
  it('current price is visible on the screen', async () => {
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: /current price:/i })
      ).toBeInTheDocument()
    );
  });
  it(' market cap is  visible on the screen', async () => {
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: /market cap:/i })
      ).toBeInTheDocument()
    );
  });
});
