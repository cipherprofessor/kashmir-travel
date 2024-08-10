import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './PieChart.scss';

const PieChart = () => {
  const getOption = () => ({
    title: {
      text: 'Market Share',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Share',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Affiliate' },
          { value: 135, name: 'Video' },
          { value: 1548, name: 'Search' },
        ],
        itemStyle: {
          color: (params) => ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'][params.dataIndex],
        },
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />;
};

export default PieChart;
