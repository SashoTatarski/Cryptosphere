import { screen, waitFor, within } from '@testing-library/react';
import { render } from '../test.utils';
import React from 'react';
import Login from './Login';

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
  });
  it.only('email field is on the screen',  async() => {
    await waitFor(() => {
      expect(getEmail()).toBeInTheDocument();
    });
  });
});

const getEmail = () => {
  return screen.getByPlaceholderText(/password/i);
};
