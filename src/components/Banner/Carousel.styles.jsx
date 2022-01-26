import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCarousel = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const StyledCarouselItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
`;

export const StyledImg = styled.img`
  src: ${(props) => props.image};
  alt: ${(props) => props.name};
  height: 80px;
  margin-bottom: 10px;
`;

export const StyledPrice = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const ResponsiveCarouselView = {
  0: {
    items: 3
  },
  1024: {
    items: 4
  }
};
