import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';
import {
  Container,
  createTheme,
  makeStyles,
  TableCell,  
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@material-ui/core';


export const StyledDarkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: 'dark'
  }
});

export const StyledContainer = styled(Container)`
  text-align: center;
`;

export const CoinsTableUseStyles = makeStyles({
  pagination: {
    '& .MuiPaginationItem-root': {
      color: 'gold'
    }
  }
});

export const StyledTableTitle = styled(Typography)`
  margin: 20px !important;
  font-family: Montserrat !important;
`;

export const StyledSearchBar = styled(TextField)`
  margin-bottom: 20px !important;
  width: 100%;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #eebc1d;
`;

export const StyledCellTitle = styled(TableCell)`
  color: black !important;
  font-weight: 700 !important;
  font-family: Montserrat !important;
`;

export const StyledRow = styled(TableRow)`
  background-color: #16171a;
  cursor: pointer;
  &:hover {
    background-color: #131111;
  }
  font-family: Montserrat;
`;

export const StyledTableCell = styled(TableCell)`
  display: flex !important;
  gap: 15px;
`;

export const StyledCoinImage = styled.img`
  margin-bottom: 10px;
  height: 50px;
`;

export const StyledCoinSymbol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSpanSymbolAbbr = styled.span`
  text-transform: uppercase;
  font-size: 22px;
`;

export const StyledSpanSymbolName = styled.span`
  color: darkgrey;
`;

export const StyledTableCellPercentage = styled(TableCell)`
  color: ${(props) => (props.profit > 0 ? 'rgb(14, 203, 129)' : 'red')};
  font-weight: 500;
`;

export const StyledTablePagination = styled(Pagination)`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

