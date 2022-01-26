import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { CryptoState } from '../Context/CryptoContext';
import { StyledLinearProgress } from '../pages/CoinPage.styles';
import { Paper, ThemeProvider,Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {
  CoinsTableUseStyles,
  StyledContainer,
  StyledDarkTheme,
  StyledCoinSymbol,
  StyledCoinImage,
  StyledSpanSymbolAbbr,
  StyledSpanSymbolName,
  StyledTableCellPercentage,
  StyledTableCell,
  StyledCellTitle,
  StyledTableHead,
  StyledRow,
  StyledSearchBar,
  StyledTableTitle,
  StyledTablePagination
} from '../components';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([
    'Coin',
    'Price',
    '24h Change',
    'Market Cap'
  ]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  let navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const fetchCoins = async () => {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      if (active) {
        setCoins(data);
        setLoading(false);
      }
    };
    fetchCoins();
    return () => {
      active = false;
    };
  }, [currency]);

  const classes = CoinsTableUseStyles();

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <StyledContainer>
        <StyledTableTitle variant="h4">
          Cryptocurrency Prices by Market Cap
        </StyledTableTitle>
        <StyledSearchBar
          label="Search For a Crypto Currency.."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search-element"
        />
        <TableContainer component={Paper}>
          {loading ? (
            <StyledLinearProgress />
          ) : (
            <Table aria-label="simple table">
              <StyledTableHead>
                <TableRow>
                  {tableHeaders.map((head) => (
                    <StyledCellTitle
                      key={head}
                      align={head === 'Coin' ? 'left' : 'right'}
                    >
                      {head}
                    </StyledCellTitle>
                  ))}
                </TableRow>
              </StyledTableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <StyledRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        key={row.name}
                      >
                        <StyledTableCell component="th" scope="row">
                          <StyledCoinImage src={row?.image} alt={row.name} />
                          <StyledCoinSymbol>
                            <StyledSpanSymbolAbbr>{row.symbol}</StyledSpanSymbolAbbr>
                            <StyledSpanSymbolName>{row.name}</StyledSpanSymbolName>
                          </StyledCoinSymbol>
                        </StyledTableCell>
                        <TableCell align="right">
                          {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <StyledTableCellPercentage
                          align="right"
                          style={{ color: profit > 0 ? 'rgb(14, 203, 129)' : 'red' }}
                        >
                          {profit && '+'}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </StyledTableCellPercentage>
                        <TableCell align="right">
                          {symbol}{' '}
                          {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                        </TableCell>
                      </StyledRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <StyledTablePagination
          count={Number((handleSearch()?.length / 10).toFixed(0))}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </StyledContainer>
    </ThemeProvider>
  );
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default CoinsTable;
