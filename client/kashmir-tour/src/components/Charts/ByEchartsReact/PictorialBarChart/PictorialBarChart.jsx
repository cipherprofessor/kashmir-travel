import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PictorialBarChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Pictorial Bar Chart',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Sales',
          type: 'pictorialBar',
          data: [20, 30, 40, 50, 60, 70, 80],
          symbol: 'rect',
          symbolRepeat: true,
          symbolSize: [30, 10],
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

export default PictorialBarChart;
