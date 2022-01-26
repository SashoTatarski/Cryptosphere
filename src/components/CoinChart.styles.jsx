import styled from 'styled-components';
import { CircularProgress, makeStyles } from '@material-ui/core';

export const StyledChartContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 40px;
`;

export const StyledDivChartResponsive = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: 0,
      padding: 20,
      paddingTop: 0
    }
  }
}));

export const StyledCircularProgress = styled(CircularProgress)`
  color: gold;
`;

export const StyledChartButtons = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  width: 100%;
`;
