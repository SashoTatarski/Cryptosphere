import React, { useState } from 'react';

import {
  StyledModal,
  StyledModalOverlay,
  StyledCloseButton,
  IconDoneStyleWrapper,
  StyledModalTitle
} from './Modal.styles';

const Modal = ({ visible, title , onClose }) => {

  return visible ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledCloseButton onClick={onClose}>&#10005;</StyledCloseButton>
        <IconDoneStyleWrapper />
        <StyledModalTitle> {title}</StyledModalTitle>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;
};
export default Modal;
