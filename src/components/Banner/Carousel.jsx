import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoState } from '../../Context/CryptoContext';
import { numberWithCommas } from '../../components/CoinsTable';
import { TrendingCoins } from '../../config/api';
import AliceCarousel from 'react-alice-carousel';
import {
  ResponsiveCarouselView,  
  StyledCarousel,
  StyledImg,
  StyledCarouselItem,
  StyledPrice
} from '../../components';

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
      <StyledCarouselItem to={`/coins/${coin.id}`} key={coin.id}>
        <StyledImg src={coin?.image} alt={coin.name} />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
              fontWeight: 500
            }}
          >
            {profit && '+'}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <StyledPrice>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </StyledPrice>
      </StyledCarouselItem>
    );
  });

  return (
    <StyledCarousel>
      <AliceCarousel
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
    </StyledCarousel>
  );
};

export default Carousel;
