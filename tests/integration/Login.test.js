import { screen, waitFor } from '@testing-library/react';

import React from 'react';

import { Dashboard, Login } from '../../src/pages';

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
