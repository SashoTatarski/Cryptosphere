import React from 'react';

import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { render } from '..';
import Profile from '../../src/pages/Profile';

describe('Profile page', () => {
  beforeEach(() => {
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
  });
  it('profile picture is visible on the screen', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('first name is visible on the screen', () => {
    expect(screen.getByTestId('name-element')).toBeInTheDocument();
  });
  it('last name is visible on the screen', () => {
    expect(screen.getByText(/ilieva/i)).toBeInTheDocument();
  });
  it('email is visible on the screen', () => {
    expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
  });

  it('default button visible on the screen is edit', () => {
    expect(getEditButton()).toBeInTheDocument();
  });

  it('when edit button is clicked save button is shown', () => {
    user.click(getEditButton());
    expect(getSaveButton()).toBeInTheDocument();
  });

  it('first and last name are update correctly', () => {
    user.click(getEditButton());

    user.type(screen.getByTestId('first-name-element'), '{selectall}Vesi');

    user.type(screen.getByTestId('last-name-element'), '{selectall}Vasileva');

    user.click(getSaveButton());

    expect(screen.getByText(/vesi/i)).toBeInTheDocument();
    expect(screen.getByText(/vasileva/i)).toBeInTheDocument();
  });
});

const getEditButton = () => {
  return screen.getByTestId('edit-element');
};
const getSaveButton = () => {
  return screen.getByTestId('save-element');
};
