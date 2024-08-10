import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './CandlestickChart.scss';

const CandlestickChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Candlestick Chart',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Candlestick',
          type: 'candlestick',
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
            [15, 20, 15, 30],
          ],
          itemStyle: {
            color: '#2ecc71',
            color0: '#e74c3c',
            borderColor: '#2ecc71',
            borderColor0: '#e74c3c',
          },
        },
      ],
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default CandlestickChart;
