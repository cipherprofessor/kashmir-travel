import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './PolarChart.scss';

const PolarChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Polar Chart',
      },
      polar: {
        radius: '70%',
      },
      angleAxis: {
        startAngle: 75,
      },
      radiusAxis: {
        type: 'category',
        data: ['a', 'b', 'c', 'd'],
      },
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          itemStyle: {
            color: '#3498db',
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

export default PolarChart;
