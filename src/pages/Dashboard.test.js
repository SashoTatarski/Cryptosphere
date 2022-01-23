import { screen, waitFor } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '../test.utils';
import React from 'react';

import { Dashboard } from '.';

describe('Dashboard Page', () => {
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

  describe('Header', () => {
    it('link to dashboard is visible on the screen ', () => {
      expect(getHomeLink()).toBeInTheDocument();
    });
    it('change currency is visible on the screen ', () => {
      expect(getCurrency()).toBeInTheDocument();
    });
    it('link to user profile is visible on the screen ', () => {
      expect(getUserLink()).toBeInTheDocument();
    });
    it('logout is visible on the screen ', () => {
      expect(getLogout()).toBeInTheDocument();
    });
  });

  describe('Banner', () => {
    it('headings on banner section', () => {
      expect(
        screen.getByRole('heading', {
          name: /crypto dashboard/i
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          name: /get all the info regarding your favorite crypto currency/i
        })
      ).toBeInTheDocument();
    });
  });
  describe('Coins Table', () => {
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
    // it('heading on coin table section', async () => {
    //   await waitFor(() => {
    //     expect(
    //       screen.getByRole('heading', {
    //         name: /cryptocurrency prices by market cap/i
    //       })
    //     ).toBeInTheDocument();
    //   });
    // });
    // it('the entered value is visible in the search field', async () => {
    //   user.type(getSearchField(), 'bitcoin');

    //   await waitFor(() => {
    //     expect(getSearchField().value).toBe('bitcoin');
    //   });
    // });
    it('coin column visible on the table', async () => {
      await waitFor(() => {
        expect(getCoinColumn()).toBeInTheDocument();
      });
    });
    it('price column visible on the table', async () => {
      await waitFor(() => {
        expect(getPriceColumn()).toBeInTheDocument();
      });
    });
    it('24 h change column visible on the table', async () => {
      await waitFor(() => {
        expect(get24hChangeColumn()).toBeInTheDocument();
      });
    });
    it('market cap column visible on the table', async () => {
      await waitFor(() => {
        expect(getMarketCapColumn()).toBeInTheDocument();
      });
    });
  });
});

const getHomeLink = () => {
  return screen.getByText(/home/i);
};
const getCurrency = () => {
  return screen.getByRole('button', {
    name: /eur/i
  });
};

const getUserLink = () => {
  return screen.getByRole('menuitem', {
    name: /user/i
  });
};

const getLogout = () => {
  return screen.getByRole('menuitem', {
    name: /logout/i
  });
};

const getSearchField = () => {
  return screen.getByTestId('search-element');
};

const getCoinColumn = () => {
  return screen.getByRole('columnheader', {
    name: /coin/i
  });
};

const getPriceColumn = () => {
  return screen.getByRole('columnheader', {
    name: /price/i
  });
};

const get24hChangeColumn = () => {
  return screen.getByRole('columnheader', {
    name: /24h change/i
  });
};

const getMarketCapColumn = () => {
  return screen.getByRole('columnheader', {
    name: /market cap/i
  });
};
