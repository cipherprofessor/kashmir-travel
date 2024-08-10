import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './ScatterChart.scss';

const ScatterChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Scatter Plot',
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            [10, 8],
            [15, 12],
            [20, 16],
            [25, 20],
            [30, 24],
            [35, 28],
          ],
          type: 'scatter',
          itemStyle: {
            color: '#2980b9',
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

export default ScatterChart;
