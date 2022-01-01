import { CanvasJSChart } from 'canvasjs-react-charts';
import React, { useEffect, useState } from 'react';
import { getDailyChartForSymbol } from './ApiConnector';

const Chart = () => {
  const [stockData, setStockData] = useState([]);
  const [stockName, setStockName] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol('TSLA');

      setStockData(formatStockData(result.data['Time Series (Daily)']));
      setStockName(result.data['Meta Data']['2. Symbol']);

      //console.log(result.data);
    };

    fetchStockData();
  }, []);

  const options = {
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text: `${stockName} Stock Price`
    },
    axisY: {
      prefix: '$',
      title: 'Price (in USD)',
      // Minimum value is 10% less than the lowest price in the dataset
      minimum: Math.min(...stockData.map((data) => data.low)) / 1.1,
      // Minimum value is 10% more than the highest price in the dataset
      maximum: Math.max(...stockData.map((data) => data.high)) * 1.1,
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisX: {
      valueFormatString: 'MMM',
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }     
    },
    data: [
      {
        type: 'candlestick',
        showInLegend: true,
        name: `${stockName}`,
        //yValueFormatString: '$###0.00',
        //xValueFormatString: 'MMMM YY',
        risingColor: 'green',
        fallingColor: 'red',
        dataPoints: stockData.map((stockData) => ({
          x: new Date(stockData.date),
          y: [stockData.open, stockData.high, stockData.low, stockData.close]
        }))
      }
    ]
  };

  return <CanvasJSChart options={options} />;
};

function formatStockData(stockData) {
  return Object.entries(stockData).map((entries) => {
    //console.log(entries);
    const [date, priceData] = entries;

    return {
      date,
      open: Number(priceData['1. open']),
      high: Number(priceData['2. high']),
      low: Number(priceData['3. low']),
      close: Number(priceData['4. close'])
    };
  });
}

export default Chart;
