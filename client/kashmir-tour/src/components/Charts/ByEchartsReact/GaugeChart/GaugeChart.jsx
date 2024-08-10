import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './GaugeChart.scss';

const GaugeChart = () => {
  const getOption = () => ({
    title: {
      text: 'Speedometer',
    },
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: 'Speed',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: 50, name: 'Speed' }],
        itemStyle: {
          color: '#e67e22',
        },
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />;
};

export default GaugeChart;
