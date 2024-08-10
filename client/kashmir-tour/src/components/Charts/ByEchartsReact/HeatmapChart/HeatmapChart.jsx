import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './HeatmapChart.scss';

const HeatmapChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Heatmap',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'category',
        data: ['Morning', 'Afternoon', 'Evening'],
      },
      visualMap: {
        min: 0,
        max: 50,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
      },
      series: [
        {
          name: 'Attendance',
          type: 'heatmap',
          data: [
            [0, 0, 5],
            [1, 0, 1],
            [2, 0, 0],
            [3, 0, 0],
            [4, 0, 0],
            [5, 0, 0],
            [6, 0, 0],
            [0, 1, 0],
            [1, 1, 3],
            [2, 1, 4],
            [3, 1, 0],
            [4, 1, 0],
            [5, 1, 0],
            [6, 1, 0],
            [0, 2, 0],
            [1, 2, 0],
            [2, 2, 2],
            [3, 2, 5],
            [4, 2, 0],
            [5, 2, 0],
            [6, 2, 0],
          ],
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

export default HeatmapChart;
