import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import { CoinChart, Header } from '../components';
import { formatPrice } from '../components/CoinsTable';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../Context/CryptoContext';
import {
  CoinPageUseStyles,
  StyledImage,
  StyledSpan,
  StyledCoinDescription,
  StyledHeading,
  StyledCoinPrice,
  StyledLinearProgress,
  StyledDashboard
} from '../pages';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  useEffect(() => {
    let active = true;

    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));

      if (active) {
        setCoin(data);
      }
    };
    fetchCoin();
    return () => {
      active = false;
    };
  }, []);
  const classes = CoinPageUseStyles();

  if (!coin) return <StyledLinearProgress />;

  return (
    <StyledDashboard>
      <Header />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <StyledImage src={coin?.image.large} alt={coin?.name} />
          <StyledHeading variant="h3">{coin?.name}</StyledHeading>
          <StyledCoinDescription variant="subtitle1">
            {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
          </StyledCoinDescription>
          <div className={classes.marketData}>
            <StyledSpan>
              <StyledHeading variant="h5">Rank:</StyledHeading>
              &nbsp; &nbsp;
              <StyledCoinPrice variant="h5">
                {formatPrice(coin?.market_cap_rank)}
              </StyledCoinPrice>
            </StyledSpan>

            <StyledSpan>
              <StyledHeading variant="h5">Current Price:</StyledHeading>
              &nbsp; &nbsp;
              <StyledCoinPrice variant="h5">
                {symbol}{' '}
                {formatPrice(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </StyledCoinPrice>
            </StyledSpan>
            <StyledSpan>
              <StyledHeading variant="h5">Market Cap:</StyledHeading>
              &nbsp; &nbsp;
              <StyledCoinPrice variant="h5">
                {symbol}{' '}
                {formatPrice(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </StyledCoinPrice>
            </StyledSpan>
          </div>
        </div>
        <CoinChart coin={coin} />
      </div>
    </StyledDashboard>
  );
};

export default CoinPage;
