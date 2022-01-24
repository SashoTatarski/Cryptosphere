import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import { CoinInfo, Header } from '../components';
import { numberWithCommas } from '../components/CoinsTable';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../Context/CryptoContext';
import {
  CoinPageUseStyles,
  StyledDivDashboard,
  StyledImgCoinPage,
  StyledSpan,
  StyledTypographyCoinDesc,
  StyledTypographyHeading,
  StyledTypographyMont,
  StyledLinearProgress
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
    <StyledDivDashboard>
      <Header />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <StyledImgCoinPage src={coin?.image.large} alt={coin?.name} />
          <StyledTypographyHeading variant="h3">
            {coin?.name}
          </StyledTypographyHeading>
          <StyledTypographyCoinDesc variant="subtitle1">
            {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
          </StyledTypographyCoinDesc>
          <div className={classes.marketData}>
            <StyledSpan>
              <StyledTypographyHeading variant="h5">Rank:</StyledTypographyHeading>
              &nbsp; &nbsp;
              <StyledTypographyMont variant="h5">
                {numberWithCommas(coin?.market_cap_rank)}
              </StyledTypographyMont>
            </StyledSpan>

            <StyledSpan>
              <StyledTypographyHeading variant="h5">
                Current Price:
              </StyledTypographyHeading>
              &nbsp; &nbsp;
              <StyledTypographyMont variant="h5">
                {symbol}{' '}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </StyledTypographyMont>
            </StyledSpan>
            <StyledSpan>
              <StyledTypographyHeading variant="h5">
                Market Cap:
              </StyledTypographyHeading>
              &nbsp; &nbsp;
              <StyledTypographyMont variant="h5">
                {symbol}{' '}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </StyledTypographyMont>
            </StyledSpan>
          </div>
        </div>
        <CoinInfo coin={coin} />
      </div>
    </StyledDivDashboard>
  );
};

export default CoinPage;
