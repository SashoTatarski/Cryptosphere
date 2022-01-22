import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import React from 'react';

import { Dashboard, Login, Profile } from '../../src/pages';

import { render } from '../../src/test.utils';

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('Redirect to Dashboard after successful login', async () => {
    user.type(getEmail(), 'test@gmail.com');
    user.type(getPassword(), '123456');
    user.click(getLoginButton());

  
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
    await waitFor(() => {
   
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
