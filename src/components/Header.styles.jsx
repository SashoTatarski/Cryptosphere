import {
  Select,  
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomeButton = styled(Typography)`
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


