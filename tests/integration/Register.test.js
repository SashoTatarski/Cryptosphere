import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Modal } from '../../src/components';
import { Login, Register } from '../../src/pages';

import { render } from '..';

describe('Integration tests Register page', () => {
  beforeEach(() => {
    render(<Register />);
  });

  it('confirmation modal is opened after successful registration', async () => {
    user.type(getFirstName(), 'Peter');
    user.type(getLastName(), 'Petrov');
    user.type(getEmail(), 'test@gmail.com');
    user.type(getPassword(), '123456');
    user.type(getConfirmPassword(), '123456');

    user.click(getRegisterButton());
    render(<Modal />, {
    });
    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /registration completed successfully!/i
        })
      ).toBeInTheDocument();
    });
  });

  it('when login link is clicked Login page is rendered', async () => {
    user.click(getLoginLink());

    await waitFor(() => {
      render(<Login />);
      expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    });
  });
});

const getFirstName = () => {
  return screen.getByPlaceholderText(/first name/i);
};
const getLastName = () => {
  return screen.getByPlaceholderText(/last name/i);
};
const getEmail = () => {
  return screen.getByPlaceholderText(/email/i);
};

const getPassword = () => {
  return screen.getByPlaceholderText('Password');
};

const getConfirmPassword = () => {
  return screen.getByPlaceholderText('Confirm Password');
};
const getRegisterButton = () => {
  return screen.getByRole('button', { name: /register/i });
};

const getLoginLink = () => {
  return screen.getByRole('link', { name: /login/i });
};
