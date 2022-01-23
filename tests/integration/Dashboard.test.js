import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import React from 'react';

import { Dashboard, Login } from '../../src/pages';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render } from '../../src/test.utils';

describe('Dashboard', () => {
  const data = [
    {
      current_price: 30908,
      id: 'bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      market_cap: 52676539347,
      market_cap_rank: 1,
      name: 'Bitcoin',
      price_change_24h: -1411.967577486466,
      price_change_percentage_24h: -4.36876
    }
  ];
  const server = setupServer(
    rest.get(
      'https://api.coingecko.com/api/v3/coins/markets',

      (req, res, ctx) => {
        const currency = req.url.searchParams.get('eur');

        return res(ctx.json(data));
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  
  beforeEach(() => {
    render(<Dashboard />, {
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

  it('user logout redirect to login page', async () => {
    user.click(getLogout());
    render(<Login />, {
      initialState: {
        auth: {
          user: {
            isLoggedIn: false,
            user: null
          }
        }
      }
    });

    await waitFor(() => {
      expect(getLoginButton()).toBeInTheDocument();
    });
  });
});
const getPassword = () => {
  return screen.getByPlaceholderText(/password/i);
};
const getEmail = () => {
  return screen.getByPlaceholderText(/email/i);
};

const getLogout = () => {
  return screen.getByRole('menuitem', {
    name: /logout/i
  });
};
const getLoginButton = () => {
  return screen.getByRole('button', { name: /login/i });
};
