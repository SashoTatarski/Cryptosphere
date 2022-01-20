import styled from 'styled-components';
import { Typography, Container } from '@material-ui/core';

export const StyledBannerWrapper = styled.div`
  background-image: url(../banner2.jpg);
`;

export const StyledBannerContainer = styled(Container)`
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  justify-content: space-around;
`;
export const StyledTagline = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StyledTypographyTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Montserrat';
`;

export const StyledTypographySubtitle = styled(Typography)`
  color: darkgrey;
  text-transform: capitalize;
  font-family: 'Montserrat';
`;
