import axios from 'axios';
import localforage from 'localforage';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localforage,
    exclude: {
        query: false
    }
});

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    adapter: cache.adapter
});

export const getDailyChartForSymbol = (symbol) => {
    return axiosInstance.get('', {
        params: {
            // Fetch daily chart
            function: 'TIME_SERIES_DAILY',
            symbol,
            apikey: 'YAWUW2QEI75WE7UY'
        }
    });
};