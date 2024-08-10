import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './SankeyChart.scss';

const SankeyChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Sankey Diagram',
      },
      series: {
        type: 'sankey',
        data: [
          { name: 'a' },
          { name: 'b' },
          { name: 'c' },
          { name: 'd' },
        ],
        links: [
          { source: 'a', target: 'b', value: 5 },
          { source: 'a', target: 'c', value: 10 },
          { source: 'b', target: 'c', value: 15 },
          { source: 'c', target: 'd', value: 20 },
        ],
        itemStyle: {
          color: '#f39c12',
        },
        lineStyle: {
          color: 'source',
          curveness: 0.5,
        },
      },
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default SankeyChart;
