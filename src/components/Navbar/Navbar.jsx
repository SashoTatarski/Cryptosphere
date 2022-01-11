import React from 'react';
import { Link } from 'react-router-dom';

import {
  Center,
  Container,
  Left,
  MenuItem,
  Right,
  StyledIconHome,
  StyledIconLogout,
  StyledIconUser,
  Wrapper
} from './Navbar.styles';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/dashboard">
            <MenuItem>
              <StyledIconHome />
            </MenuItem>
          </Link>
          <Link to="/user-profile">
            <MenuItem>
              <StyledIconUser />
            </MenuItem>
          </Link>
        </Left>
        <Center>Crypto Hunter</Center>
        <Right>
          <MenuItem>
            <StyledIconLogout onClick={handleLogout} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
