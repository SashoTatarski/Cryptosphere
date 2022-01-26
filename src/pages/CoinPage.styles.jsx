import styled from 'styled-components';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';

export const StyledDivDashboard = styled.div`
  background-color: #14161a;
  color: white;
  min-height: 100vh;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  background-color: gold;
`;

export const CoinPageUseStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  sidebar: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey'
  },
  marketData: {
    alignSelf: 'start',
    padding: 25,
    paddingTop: 10,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'start'
    }
  }
}));

export const StyledImgCoinPage = styled.img`
  src: ${(props) => props.coin?.image.large};
  alt: ${(props) => props.coin?.name};
  height: 200px;
  margin-bottom: 20px;
`;

export const StyledTypographyHeading = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Montserrat;
`;

export const StyledTypographyCoinDesc = styled(Typography)`
  width: 100%;
  font-family: Montserrat;
  padding: 25px;
  padding-bottom: 15px;
  padding-top: 0px;
  text-align: justify;
  a {
    color: gold;
  };
`;

export const StyledTypographyMont = styled(Typography)`
  font-family: Montserrat;
`;

export const StyledSpan = styled.span`
  display: flex;
`;
