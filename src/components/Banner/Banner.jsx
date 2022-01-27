import React from 'react';
import {
  Carousel,
  StyledBannerContainer,
  StyledBackgroundImage,
  StyledBannerTitle,
  StyledSubtitle,
  StyledHeading
} from '../../components';

const Banner = () => {
  return (
    <StyledBackgroundImage>
      <StyledBannerContainer>
        <StyledBannerTitle>
          <StyledHeading variant="h2">Cryptosphere</StyledHeading>
          <StyledSubtitle variant="subtitle2">
            Get all the Info regarding your favorite Crypto Currency
          </StyledSubtitle>
        </StyledBannerTitle>
        <Carousel />
      </StyledBannerContainer>
    </StyledBackgroundImage>
  );
};

export default Banner;
