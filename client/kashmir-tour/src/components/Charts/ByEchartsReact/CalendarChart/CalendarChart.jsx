import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './CalendarChart.scss';

const CalendarChart = () => {
  const getOption = () => {
    const data = [];
    for (let i = 0; i < 365; i++) {
      data.push([`2023-${Math.ceil((i + 1) / 30)}-${(i % 30) + 1}`, Math.round(Math.random() * 100)]);
    }
    
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
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 20],
        range: '2023',
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: data,
      },
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default CalendarChart;
