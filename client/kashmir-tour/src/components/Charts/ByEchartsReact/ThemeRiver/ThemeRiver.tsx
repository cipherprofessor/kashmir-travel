import React from 'react';
import ReactECharts from 'echarts-for-react';
import './ThemeRiver.scss';

const ThemeRiver: React.FC = () => {
  const option = {
    series: [
      {
        type: 'themeRiver',
        data: [
          ['2024/08/10', 10, 'Theme 1'],
          ['2024/08/11', 15, 'Theme 2'],
          ['2024/08/12', 20, 'Theme 3']
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};

export default ThemeRiver;
