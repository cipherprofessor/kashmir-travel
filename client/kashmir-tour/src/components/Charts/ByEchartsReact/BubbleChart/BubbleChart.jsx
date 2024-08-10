import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './BubbleChart.scss';

const BubbleChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Bubble Chart',
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 2;
          },
          data: [
            [10, 8, 15],
            [15, 12, 20],
            [20, 16, 25],
            [25, 20, 30],
            [30, 24, 35],
            [35, 28, 40],
          ],
          itemStyle: {
            color: '#9b59b6',
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

export default BubbleChart;
