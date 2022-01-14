import { Select, Typography, Link, ThemeProvider, createTheme } from '@material-ui/core';
import styled from 'styled-components';

export const StyledTypographyHomeLink = styled(Typography)`
  font-weight: bold;
  font-family: 'Montserrat';
  cursor: pointer;
  color: gold;
  flex: 1;
`;

export const StyledSelectCurrency = styled(Select)`
  width: 100px;
  height: 40px;
  margin-right: 15px;
`;

export const StyledLinkUser = styled(Link)` 
 color: white;  
 text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledDarkTheme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        type: 'dark'
    }
});