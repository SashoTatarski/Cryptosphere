import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { render } from '../test.utils';
import React from 'react';
import Profile from './Profile';

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
    expect(screen.getByText(/deshka/i)).toBeInTheDocument();
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

  it('when edit button is clicked save button is shown', () => {
    user.click(getEditButton());

    user.type(screen.getByTestId('first-name-element'), '{selectall}Desi');

    user.type(screen.getByTestId('last-name-element'), '{selectall}Dimova');

    user.click(getSaveButton());
    

    expect(screen.getByText(/desi/i)).toBeInTheDocument();
    expect(screen.getByText(/dimova/i)).toBeInTheDocument();
  });
});

const getEditButton = () => {
  return screen.getByTestId('edit-element');
};
const getSaveButton = () => {
  return screen.getByTestId('save-element');
};
