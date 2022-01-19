import React from 'react';
import { StyledSpanSelectButton } from '../components';

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <StyledSpanSelectButton
      onClick={onClick}
      style={{
        backgroundColor: selected ? 'gold' : '',
        color: selected ? 'black' : '',
        fontWeight: selected ? 700 : 500
      }}
    >
      {children}
    </StyledSpanSelectButton>
  );
};

export default SelectButton;
