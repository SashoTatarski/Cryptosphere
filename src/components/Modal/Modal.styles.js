import styled from 'styled-components';
import { CheckmarkDoneCircle } from 'styled-icons/ionicons-outline';
export const StyledModalOverlay = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 2px;
  padding: 12px 16px;
  position: relative;
  height: 200px;
  width: 350px;
`;
export const StyledCloseButton = styled.span`
  position: absolute;
  right: 8px;
  top: 4px;
  font-size: 24px;
  cursor: pointer;
`;
export const IconDoneStyleWrapper = styled(CheckmarkDoneCircle)`
  color: #667eea;
  width: 15%;
  height: 15%;
  
  margin-left: 150px;
`;
export const StyledModalTitle = styled.h3`
  text-align: center;
`;
