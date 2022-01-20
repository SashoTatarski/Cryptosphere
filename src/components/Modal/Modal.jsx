import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/modal/modalActions';
import {
  StyledModal,
  StyledModalOverlay,
  StyledCloseButton,
  IconDoneStyleWrapper,
  StyledModalTitle
} from './Modal.styles';

const Modal = ({ hideModal, modal }) => {
  const onCloseButtonClick = () => {
    hideModal();
  };

  if (!modal.isVisible) {
    return null;
  }

  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledCloseButton onClick={onCloseButtonClick}>&#10005;</StyledCloseButton>
        <IconDoneStyleWrapper />
        <StyledModalTitle> {modal.title.title}</StyledModalTitle>
      </StyledModal>
    </StyledModalOverlay>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
