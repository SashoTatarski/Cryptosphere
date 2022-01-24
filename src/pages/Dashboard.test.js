import { screen, waitFor } from '@testing-library/react';

import React from 'react';

import { Dashboard } from '.';
import { render } from '../../tests';

describe('Dashboard Page', () => {

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
