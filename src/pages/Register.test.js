import { screen, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import { render } from '../test.utils';
import React from 'react';
import Register from './Register';
describe('Login page', () => {
  beforeEach(() => {
    render(<Register />);
  });

  it('the entered value is visible in the first name field', () => {
    user.type(getFirstName(), 'Peter');

    expect(getFirstName().value).toBe('Peter');
  });

  it('the entered value is visible in the last name field', () => {
    user.type(getLastName(), 'Petrov');

    expect(getLastName().value).toBe('Petrov');
  });

  it('the entered value is visible in the email field', () => {
    user.type(getEmail(), 'test@gmail.com');

    expect(getEmail().value).toBe('test@gmail.com');
  });

  it('the entered value is visible in the password field', () => {
    user.type(getPassword(), '123456');

    expect(getPassword().value).toBe('123456');
  });

  it('the entered value is visible in the confirm password field', () => {
    user.type(getConfirmPassword(), '123456');

    expect(getConfirmPassword().value).toBe('123456');
  });

  it('register button is visible on the screen', () => {
    expect(getRegisterButton()).toBeInTheDocument();
  });

  it('login link is visible on the screen', () => {
    expect(getLoginLink()).toBeInTheDocument();
  });

  it('shows error when password has less than 6 characters', async () => {
    user.type(getPassword(), '123');
    user.type(getConfirmPassword(), '123');
    user.click(getRegisterButton());
    await waitFor(() => {
      expect(
        screen.getByText(/password must be at least 6 characters long/i)
      ).toBeInTheDocument();
    });
  });

  it('shows error when password  and confirm password do not match ', async () => {
    user.type(getPassword(), '123456789');
    user.type(getConfirmPassword(), '12345678');
    user.click(getRegisterButton());
    await waitFor(() => {
      expect(screen.getByText(/the passwords do not match/i)).toBeInTheDocument();
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
