import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import React from 'react';

import { Dashboard, Login } from '../../src/pages';

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
