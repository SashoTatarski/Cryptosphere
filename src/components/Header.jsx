import React from 'react';
import {
  AppBar,
  Container,
  MenuItem,
  ThemeProvider,
  Toolbar
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../Context/CryptoContext';
import { logoutUser } from '../redux/auth/authActions';
import {
  StyledSelectCurrency,
  StyledTypographyHomeLink,
  StyledLinkUser,
  StyledDarkTheme
} from '../components';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <StyledTypographyHomeLink onClick={() => navigate('/dashboard')}>
              Home
            </StyledTypographyHomeLink>
            <StyledSelectCurrency
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </StyledSelectCurrency>
            <StyledLinkUser to="/user">
              <MenuItem>User</MenuItem>
            </StyledLinkUser>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
