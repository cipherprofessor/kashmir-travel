import React from 'react';
import ReactEcharts from 'echarts-for-react';

const CalendarHeatmap = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Calendar Heatmap',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 100,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        range: '2023',
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2023-01-01', 10],
          ['2023-02-01', 20],
          ['2023-03-01', 30],
          ['2023-04-01', 40],
          ['2023-05-01', 50],
          ['2023-06-01', 60],
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

export default CalendarHeatmap;
