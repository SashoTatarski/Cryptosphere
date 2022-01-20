import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectButton from './SelectButton';
import { chartDays } from '../config/data';

it('redenders component', () => {
    render(<SelectButton children={chartDays[0].label}/> );
    expect(screen.getByText(/Hours/)).toBeInTheDocument;
  });
  