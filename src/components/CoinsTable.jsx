import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { CryptoState } from '../Context/CryptoContext';
import { StyledLinearProgress } from '../pages/CoinPage.styles';
import { Paper, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {
  CoinsTableUseStyles,
  StyledContainerCoinsTable,
  StyledDarkTheme,
  StyledDivSymbolAbbr,
  StyledImgCoinsTable,
  StyledSpanSymbolAbbr,
  StyledSpanSymbolName,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableCellPercentage,
  StyledTableCellSymbol,
  StyledTableCellTitle,
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
  StyledTableRowBody,
  StyledTextFieldTable,
  StyledTypographyTable,
  StyledTablePagination
} from '../components';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [headers, setHeads] = useState([
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
      <StyledContainerCoinsTable>
        <StyledTypographyTable variant="h4">
          Cryptocurrency Prices by Market Cap
        </StyledTypographyTable>
        <StyledTextFieldTable
          label="Search For a Crypto Currency.."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search-element"
        />
        <StyledTableContainer component={Paper}>
          {loading ? (
            <StyledLinearProgress />
          ) : (
            <StyledTable aria-label="simple table">
              <StyledTableHead>
                <StyledTableRow>
                  {headers.map((head) => (
                    <StyledTableCellTitle
                      key={head}
                      align={head === 'Coin' ? 'left' : 'right'}
                    >
                      {head}
                    </StyledTableCellTitle>
                  ))}
                </StyledTableRow>
              </StyledTableHead>

              <StyledTableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <StyledTableRowBody
                        onClick={() => navigate(`/coins/${row.id}`)}
                        key={row.name}
                      >
                        <StyledTableCellSymbol
                          component="th"
                          scope="row"
                        >
                          <StyledImgCoinsTable
                            src={row?.image}
                            alt={row.name}
                            data-testid={'image-element'}
                          />
                          <StyledDivSymbolAbbr>
                            <StyledSpanSymbolAbbr>{row.symbol}</StyledSpanSymbolAbbr>
                            <StyledSpanSymbolName>{row.name}</StyledSpanSymbolName>
                          </StyledDivSymbolAbbr>
                        </StyledTableCellSymbol>
                        <StyledTableCell align="right">
                          {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                        </StyledTableCell>
                        <StyledTableCellPercentage
                          align="right"
                          style={{ color: profit > 0 ? 'rgb(14, 203, 129)' : 'red' }}
                        >
                          {profit && '+'}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </StyledTableCellPercentage>
                        <StyledTableCell align="right">
                          {symbol}{' '}
                          {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                        </StyledTableCell>
                      </StyledTableRowBody>
                    );
                  })}
              </StyledTableBody>
            </StyledTable>
          )}
        </StyledTableContainer>
        <StyledTablePagination
          count={Number((handleSearch()?.length / 10).toFixed(0))}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </StyledContainerCoinsTable>
    </ThemeProvider>
  );
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default CoinsTable;
