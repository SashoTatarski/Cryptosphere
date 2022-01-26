import React from 'react';
import {
  Carousel,
  StyledBannerContainer,
  StyledBannerDivImg,
  StyledDivTitle,
  StyledTypographySubtitle,
  StyledTypographyTitle
} from '../../components';

const Banner = () => {
  return (
    <StyledBannerDivImg>
      <StyledBannerContainer>
        <StyledDivTitle>
          <StyledTypographyTitle variant="h2">
            Crypto Dashboard
          </StyledTypographyTitle>
          <StyledTypographySubtitle variant="subtitle2">
            Get all the Info regarding your favorite Crypto Currency
          </StyledTypographySubtitle>
        </StyledDivTitle>
        <Carousel />
      </StyledBannerContainer>
    </StyledBannerDivImg>
  );
};

export default Banner;