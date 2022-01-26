import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTypographyHeaderTitle = styled(Typography)`
  flex: 1;
  color: gold;
  cursor: pointer;
`;

export const StyledSelectCurrency = styled(Select)`
  width: 85px;
  height: 40px;
  margin-right: 15px;
`;

export const StyledLinkUser = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledMenuItem = styled(MenuItem)``;
export const StyledAppBar = styled(AppBar)``;
export const StyledContainer = styled(Container)``;
export const StyledToolbar = styled(Toolbar)``;
