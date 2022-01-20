import { render, screen } from '@testing-library/react';
import React from 'react';
import Hello from './Sample';

test.skip('renders hello world', () => {
  render(<Hello />);
  const myElement = screen.getByText('Hello World!');
  expect(myElement).toBeInTheDocument();
});
