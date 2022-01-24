import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';

import { Dashboard, Login, Register } from '../../src/pages';

import { render } from '..';

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('Redirect to Dashboard after successful login', async () => {
    await waitFor(() => {
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
      expect(
        screen.getByRole('heading', {
          name: /crypto dashboard/i
        })
      ).toBeInTheDocument();
    });
  });
  it('when register link is clicked Register page is rendered', async () => {
    user.click(getRegisterLink());
    render(<Register />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /register/i })).toBeInTheDocument();
    });
  });
});
const getPassword = () => {
  return screen.getByPlaceholderText(/password/i);
};
const getEmail = () => {
  return screen.getByPlaceholderText(/email/i);
};

const getLoginButton = () => {
  return screen.getByRole('button', { name: /login/i });
};
const getRegisterLink = () => {
  return screen.getByRole('link', { name: /register/i });
};
