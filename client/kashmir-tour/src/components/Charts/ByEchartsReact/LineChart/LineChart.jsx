import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './LineChart.scss';

const LineChart = () => {
  const getOption = () => ({
    title: {
      text: 'Temperature Variation',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Temperature',
        type: 'line',
        data: [10, 15, 12, 14, 18, 16, 19],
        itemStyle: {
          color: '#3498db',
        },
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />;
};

export default LineChart;
