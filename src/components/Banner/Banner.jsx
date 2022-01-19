import React from 'react';
import {
  Carousel,
  StyledBannerContainer,
  StyledBannerWrapper,
  StyledTagline,
  StyledTypographySubtitle,
  StyledTypographyTitle
} from '../../components';

const Banner = () => {
  return (
    <StyledBannerWrapper>
      <StyledBannerContainer>
        <StyledTagline>
          <StyledTypographyTitle variant="h2">
            Crypto Dashboard
          </StyledTypographyTitle>
          <StyledTypographySubtitle variant="subtitle2">
            Get all the Info regarding your favorite Crypto Currency
          </StyledTypographySubtitle>
        </StyledTagline>
        <Carousel />
      </StyledBannerContainer>
    </StyledBannerWrapper>
  );
};

export default Banner;
