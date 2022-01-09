import styled from 'styled-components';
import { ArrowGrowth } from 'styled-icons/fluentui-system-filled';
import { Link } from 'react-router-dom';
export const SForm = styled.form`
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 16px;
`;
export const IconStyleWrapper = styled(ArrowGrowth)`
  color: #667eea;
  width: 15%;
  height: 15%;
  margin-right: 80px;
`;
export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #667eea;
  margin-top: 5px;
  text-align: center;
  margin-right: 80px;
`;
export const SmallStyledTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #4a5568;
  text-align: center;
  margin-right: 80px;
`;




export const StyledInput = styled.input`
  display: block;
  outline: 0;
  width: 70%;
  padding: 8px;
  font-size: 14px;
  border: 0;
  border-bottom: ${(props) =>
    props.validationFailed ? '0.5px solid red' : '0.5px solid blue'};
  background-color: #edf2f7;
  margin-bottom: 20px;
`;

export const StyledError = styled.div`
  color: red;
  margin-bottom: 5px;
`;
export const StyledButton = styled.button`
  display: block;
  border: none;
  width: 70%;
  padding: 8px;
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
  background-color: #667eea;
  box-sizing: content-box;
`;

export const SRedirect = styled.div`
  font-size: 12px;
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
export const SRedirectLabel = styled.span`
  color: rgb(74, 74, 74);
`;

export const SRedirectLink = styled(Link)`
  color: #667eea;
`;
