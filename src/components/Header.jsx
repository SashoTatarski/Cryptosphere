import {
  AppBar,
  Container,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CryptoState } from '../Context/CryptoContext';
import { logoutUser } from '../redux/auth/authActions';
import { StyledDarkTheme, StyledTypographyHeaderTitle } from '../components';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}));

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser()); 

  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <StyledTypographyHeaderTitle
              onClick={() => history('/dashboard')}              
            >
              Home
            </StyledTypographyHeaderTitle>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </Select>
            <Link to="/user" style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem>User</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
