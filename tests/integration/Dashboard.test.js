import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import React from 'react';

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
  it('redirect from dashboard to user profile page view', async () => {
    user.click(screen.getByRole('menuitem', { name: /user/i }));

    render(<Profile />, {
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

    await waitFor(() => {
      expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
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
