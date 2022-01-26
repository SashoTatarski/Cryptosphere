import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoState } from '../Context/CryptoContext';
import { HistoricalChart } from '../config/api';
import { chartTimePeriod } from '../config/data';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { ThemeProvider } from '@material-ui/core';
import {
  SelectButton,
  StyledDarkTheme,
  StyledChartContainer,
  StyledDivChartResponsive,
  StyledCircularProgress,
  StyledChartButtons
} from '.';

const CoinChart = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();  

  const classes = StyledDivChartResponsive();

  useEffect(() => {
    let active = true;

    const fetchHistoricData = async () => {
      const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
      if (active) {
        setHistoricData(data.prices);
      }
    };
    fetchHistoricData();
    return () => {
      active = false;
    };
  }, [days, currency]);
  return (
    <ThemeProvider theme={StyledDarkTheme}>
      <StyledChartContainer className={classes.container}>
        {!historicData ? (
          <StyledCircularProgress size={250} thickness={1} />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: '#EEBC1D'
                  }
                ]
              }}
              options={{
                elements: {
                  point: {
                    radius: 1
                  }
                }
              }}
            />
            <StyledChartButtons>
              {chartTimePeriod.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);                    
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </StyledChartButtons>
          </>
        )}
      </StyledChartContainer>
    </ThemeProvider>
  );
};

export default CoinChart;
