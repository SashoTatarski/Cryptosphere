import { rest } from 'msw';
import { SingleCoin } from '../src/config/api';

const data = [
  {
    current_price: 30908,
    id: 'bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',

    market_cap: 52676539347,
    market_cap_rank: 1,
    name: 'Bitcoin',
    price_change_24h: -1411.967577486466,
    price_change_percentage_24h: -4.36876
  }
];
const bitcoin = {
  name: 'Bitcoin',
  description: { en: 'Bitcoin is the first successful internet' },
  image: {
    large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
  },
  market_cap_rank: 1,
  market_data: { current_price: { eur: 59717 }, market_cap: { eur: 556372055869 } },
  market_cap: 52676539347,
  id: 'bitcoin'
};
const history = {
  prices: [1642944583482, 31705.166077590693]
};
const handlers = [
  rest.post('http://localhost:8000/api/auth/register', async (req, res, ctx) => {
    return res(ctx.json({ message: 'Success' }));
  }),
  rest.post('http://localhost:8000/api/update', async (req, res, ctx) => {
    return res(ctx.json({ message: 'Success' }));
  }),
  rest.get(
    'https://api.coingecko.com/api/v3/coins/markets',

    (req, res, ctx) => {
      const currency = req.url.searchParams.get('eur');

      return res(ctx.json(data));
    }
  ),
  rest.get(
    'https://api.coingecko.com/api/v3/coins/:coin',(req, res, ctx) => {
    
      return res(ctx.json(bitcoin));
    }
  ),
  rest.get(
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',

    (req, res, ctx) => {
      return res(ctx.json(history));
    }
  )
];

export { handlers };
