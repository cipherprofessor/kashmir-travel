import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './ParallelCoordinatesChart.scss';

const ParallelCoordinatesChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Parallel Coordinates',
      },
      parallelAxis: [
        { dim: 0, name: 'Price' },
        { dim: 1, name: 'Net Weight' },
        { dim: 2, name: 'Amount' },
        { dim: 3, name: 'Score' },
      ],
      series: {
        type: 'parallel',
        lineStyle: {
          width: 4,
          color: '#f39c12',
        },
        data: [
          [12, 30, 80, 75],
          [16, 32, 60, 70],
          [18, 36, 50, 65],
          [20, 40, 40, 55],
        ],
      },
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default ParallelCoordinatesChart;
