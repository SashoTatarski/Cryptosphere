import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDivCarousel = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;    
`;

export const StyledLinkCarouselItem = styled(Link)`
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

export const StyledSpanContainerPrice = styled.span`
 font-size: 22px; 
 font-weight: 500
`;