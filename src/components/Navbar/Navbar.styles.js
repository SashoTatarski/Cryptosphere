import styled from 'styled-components';
import { HomeAlt, LogOutCircle, UserCircle } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  height: 60px;
  background-color: #667eea;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;

export const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  font-size: 35px;

  `;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  justify-content: flex-end;
 
`;

export const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;
export const StyledIconHome = styled(HomeAlt)`
  color: darkblue;
  
  width: 15%;
  height: 15%;
`;
export const StyledIconUser = styled(UserCircle)`
  color: darkblue;
  width: 15%;
  height: 15%;
`;
export const StyledIconLogout = styled(LogOutCircle)`
  color: darkblue;
  width: 15%;
  height: 15%;
 
`;
