import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './AreaChart.scss';

const AreaChart = () => {
  const getOption = () => ({
    title: {
      text: 'Area Chart Example',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Amount',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          color: '#e74c3c',
        },
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />;
};

export default AreaChart;
