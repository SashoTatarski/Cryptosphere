import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { render } from '../test.utils';
import React from 'react';
import Login from './Login';

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
  });
  

  it('the entered value is visible in the email field', () => {
    user.type(getEmail(), 'test@gmail.com');

    expect(getEmail().value).toBe('test@gmail.com');
  });

  it('the entered value is visible in the password field', () => {
    user.type(getPassword(), '123456');

    expect(getPassword().value).toBe('123456');
  });


  it('login button is visible on the screen', () => {
    expect(getLoginButton()).toBeInTheDocument();
  });

  it('register link is visible on the screen', () => {
    expect(getRegisterLink()).toBeInTheDocument();
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
