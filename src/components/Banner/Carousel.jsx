import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ResponsiveCarouselView,
  StyledAliceCarousel,
  StyledDivCarousel,
  StyledImg,
  StyledLinkCarouselItem,
  StyledSpanContainerPrice,
  StyledSpanEmpty,
  StyledSpanPriceColor
} from '../../components';
import { numberWithCommas } from '../../components/CoinsTable';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Context/CryptoContext';

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  useEffect(() => {
    let active = true;
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(currency));

      if (active) {
        setTrending(data);
      }
    };

    fetchTrendingCoins();
    return () => {
      active = false;
    };
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <StyledLinkCarouselItem to={`/coins/${coin.id}`} key={coin.id}>
        <StyledImg src={coin?.image} alt={coin.name} />
        <StyledSpanEmpty>
          {coin?.symbol}
          &nbsp;
          <StyledSpanPriceColor
            style={{
              color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
              fontWeight: 500
            }}
          >
            {profit && '+'}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </StyledSpanPriceColor>
        </StyledSpanEmpty>
        <StyledSpanContainerPrice>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </StyledSpanContainerPrice>
      </StyledLinkCarouselItem>
    );
  });

  return (
    <StyledDivCarousel>
      <StyledAliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={ResponsiveCarouselView}
        autoPlay
        items={items}
      />
    </StyledDivCarousel>
  );
};

export default Carousel;
