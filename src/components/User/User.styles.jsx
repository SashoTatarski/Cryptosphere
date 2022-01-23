import styled from 'styled-components';
import { Edit, Save } from 'styled-icons/fluentui-system-filled';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14161a;
  padding: 1rem;
  z-index: -1;
  overflow: hidden;
`;

export const Card = styled.article`
  flex-grow: 1;
  background-color: white;
  position: relative;
  max-width: 22.5rem;
  border-radius: 1rem;
  box-shadow: 0 4rem 4rem -2rem rgba(0, 0, 0, 0.2);
  margin: 0 1.625rem;
`;

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8.75rem;
  color: hsl(227, 10%, 46%);
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: url();
    width: 100%;
    height: 8.75rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: -50px;
  border: 5px solid white;
  z-index: 1;
  margin-bottom: 1.625rem;
`;

export const Title = styled.div`
  margin-bottom: 0.75rem;
`;

export const Name = styled.input`
  display: block;
  font-size: 1.125rem;
  font-weight: 300;
  color: hsl(229, 23%, 23%);
  margin: auto;
  border: none;
  text-align: center;
`;

export const NameParagraph = styled.div`
  display: block;
  font-size: 1.125rem;
  font-weight: 300;
  color: hsl(229, 23%, 23%);
  margin: auto;
  border: none;
  text-align: center;
`;
export const StyledParagraph = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.625rem;
`;

export const Stats = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 1.625rem 1rem;
  li {
    list-style: none;
    ::before {
      content: '\\200B';
      height: 0;
      display: block;
    }
  }
  ::before {
    content: '';
    background: hsl(0, 0%, 59%);
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
`;

export const EditStyledIcon = styled(Edit)`
  color: hsl(229, 23%, 23%);
  width: 15%;
  height: 15%;
`;

export const SaveStyledSave = styled(Save)`
  color: hsl(229, 23%, 23%);
  width: 15%;
  height: 15%;
`;
export const StButton = styled.button`
  outline: none;
  background-color: white;
  border: none;
`;
