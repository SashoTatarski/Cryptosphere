import { screen, waitFor } from '@testing-library/react';
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
              name: 'Test',
              email: 'test@gmail.com',
              firstName: 'Deshka',
              lastName: 'Ilievas'
            }
          }
        }
      }
    });
  });

  it('first name is visible on the screen', () => {
    expect(screen.getByText(/deshka/i)).toBeInTheDocument();
  });
});
