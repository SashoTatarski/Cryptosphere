import styled from 'styled-components';

export const StyledSpanSelectButton = styled.span`
  border: 1px solid gold;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Montserrat;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'gold' : '')};
  color: ${(props) => (props.selected ? 'black' : '')};
  font-weight: ${(props) => (props.selected ? 700 : 500)};
  &:hover {
    background-color: gold;
    color: black;
  }
  width: 22%;
  //   margin: 5,
`;
