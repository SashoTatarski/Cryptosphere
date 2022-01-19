import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Context/CryptoContext';
import {
  StyledDivCarousel,
  StyledImg,
  StyledLinkCarouselItem,
  StyledSpanContainerPrice
} from './Carousel.styles';
import { numberWithCommas } from '../../components/CoinsTable';

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
        <StyledSpanContainerPrice>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </StyledSpanContainerPrice>
      </StyledLinkCarouselItem>
    );
  });

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  };
  return (
    <StyledDivCarousel>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </StyledDivCarousel>
  );
};

export default Carousel;
