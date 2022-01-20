import { render } from '@testing-library/react';
import React from 'react';
import 'react-router-dom';
import CryptoContext from '../Context/CryptoContext';
import Header from './Header';

const mockedNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedNavigation
    })
  };
});

it.skip('redenders home', () => {
  render(
    <CryptoContext>
      <Header />
    </CryptoContext>
  );
});
