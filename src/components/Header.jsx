import {
  AppBar,
  Container,
  MenuItem,
  ThemeProvider,
  Toolbar
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  StyledDarkTheme,
  StyledHomeButton,
  StyledLinkUser,
  StyledSelectCurrency
} from '../components';
import { CryptoState } from '../Context/CryptoContext';
import { logoutUser } from '../redux';

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth);
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
