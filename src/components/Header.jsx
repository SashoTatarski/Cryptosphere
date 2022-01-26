import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../Context/CryptoContext';
import { logoutUser } from '../redux';
import {
  AppBar,
  Container,
  MenuItem,
  ThemeProvider,
  Toolbar
} from '@material-ui/core';
import {
  StyledDarkTheme,
  StyledLinkUser,
  StyledSelectCurrency,
  StyledHomeButton
} from '../components';

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const userData = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <StyledHomeButton
              onClick={() => navigate('/dashboard')}
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                flex: 1
              }}
            >
              Home
            </StyledHomeButton>
            <StyledSelectCurrency
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </StyledSelectCurrency>
            <StyledLinkUser to="/user">
              <MenuItem>{userData.user.user.firstName}</MenuItem>
            </StyledLinkUser>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
