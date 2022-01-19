import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Context/CryptoContext';
import { numberWithCommas } from '../../components/CoinsTable';
import {
  ResponsiveCarouselView,
  StyledAliceCarousel,
  StyledDivCarousel,
  StyledImg,
  StyledLinkCarouselItem,
  StyledSpanContainerPrice,
  StyledSpanPriceColor,
  StyledSpanEmpty
} from '../../components';


const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <StyledLinkCarouselItem to={`/coins/${coin.id}`} key={coin.id}>
        <StyledImg src={coin?.image} alt={coin.name} />
        <StyledSpanEmpty>
          {coin?.symbol}
          &nbsp;
          <StyledSpanPriceColor>
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
