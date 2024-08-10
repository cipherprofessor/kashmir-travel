import React from 'react';
import ReactECharts from 'echarts-for-react';
import './KlineChart.scss';

const KlineChart: React.FC = () => {
  const option = {
    xAxis: {
      data: ['2024/08/10', '2024/08/11', '2024/08/12']
    },
    yAxis: {},
    series: [
      {
        type: 'k',
        data: [
          [2320.26, 2320.26, 2287.3, 2362.94],
          [2300, 2291.3, 2288.26, 2308.38],
          [2295.35, 2346.5, 2295.35, 2346.92]
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};

export default KlineChart;
