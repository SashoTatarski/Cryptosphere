import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../Context/CryptoContext';
import { logoutUser } from '../redux';
import {
  StyledAppBar,
  StyledContainer,
  StyledDarkTheme,
  StyledLinkUser,
  StyledMenuItem,
  StyledSelectCurrency,
  StyledToolbar,
  StyledTypographyHeaderTitle
} from '../components';


const Header = () => {
  const { currency, setCurrency } = CryptoState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <StyledAppBar color="transparent" position="static">
        <StyledContainer>
          <StyledToolbar>
            <StyledTypographyHeaderTitle
              onClick={() => navigate('/dashboard')}
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                flex: 1
              }}
            >
              Home
            </StyledTypographyHeaderTitle>
            <StyledSelectCurrency
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <StyledMenuItem value={'USD'}>USD</StyledMenuItem>
              <StyledMenuItem value={'EUR'}>EUR</StyledMenuItem>
            </StyledSelectCurrency>
            <StyledLinkUser to="/user">
              <StyledMenuItem>User</StyledMenuItem>
            </StyledLinkUser>
            <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
          </StyledToolbar>
        </StyledContainer>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Header;
