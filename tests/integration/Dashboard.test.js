import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Dashboard, Login, Profile } from '../../src/pages';

import { render } from '..';

describe('Dashboard', () => {
  beforeEach(() => {
    render(<Dashboard />, {
      initialState: {
        auth: {
          user: {
            isLoggedIn: true,
            user: {
              email: 'test@gmail.com',
              firstName: 'test',
              lastName: 'testing'
            }
          }
        }
      }
    });
  });

  it('redirect from dashboard to user profile page view', async () => {
    user.click(screen.getByRole('menuitem', { name: /test/i }));

    render(<Profile />, {
      initialState: {
        auth: {
          user: {
            isLoggedIn: true,
            user: {
              email: 'test@gmail.com',
              firstName: 'test',
              lastName: 'testing'
            }
          }
        }
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
    });
  });
});

const getLogout = () => {
  return screen.getByRole('menuitem', {
    name: /logout/i
  });
};
const getLoginButton = () => {
  return screen.getByRole('button', { name: /login/i });
};
