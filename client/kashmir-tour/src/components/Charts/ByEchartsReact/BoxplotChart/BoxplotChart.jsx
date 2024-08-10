import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './BoxplotChart.scss';

const BoxplotChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Boxplot',
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Category1', 'Category2', 'Category3', 'Category4'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Boxplot',
          type: 'boxplot',
          data: [
            [850, 740, 900, 1070, 800],
            [960, 940, 1000, 1100, 950],
            [980, 900, 1000, 1060, 920],
            [880, 820, 960, 1020, 870],
          ],
          itemStyle: {
            color: '#1abc9c',
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

export default BoxplotChart;
