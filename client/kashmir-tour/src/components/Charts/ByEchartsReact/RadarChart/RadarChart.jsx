import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './RadarChart.scss';

const RadarChart = () => {
  const getOption = () => ({
    title: {
      text: 'Budget vs Spending',
    },
    tooltip: {},
    legend: {
      data: ['Allocated Budget', 'Actual Spending'],
    },
    radar: {
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'IT', max: 30000 },
        { name: 'Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs Spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending',
          },
        ],
        itemStyle: {
          color: '#9b59b6',
        },
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />;
};

export default RadarChart;
