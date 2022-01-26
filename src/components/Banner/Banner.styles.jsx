import styled from 'styled-components';
import { Typography, Container } from '@material-ui/core';

export const StyledBackgroundImage = styled.div`
  background-image: url(../banner2.jpg);
`;

export const StyledBannerContainer = styled(Container)`
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  justify-content: space-around;
`;
export const StyledBannerTitle = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StyledHeading = styled(Typography)`
  font-weight: bold !important;
  margin-bottom: 15px !important;
  font-family: Montserrat !important;
`;

export const StyledSubtitle = styled(Typography)`
  color: darkgrey !important;
  text-transform: capitalize !important;
  font-family: Montserrat !important;
`;
