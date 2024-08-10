import React from 'react';
import ReactEcharts from 'echarts-for-react';

const TimelineChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Timeline Chart',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['2016', '2017', '2018', '2019', '2020'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Sales',
          type: 'line',
          data: [10, 20, 30, 40, 50],
        },
      ],
      timeline: {
        axisType: 'category',
        data: ['2016', '2017', '2018', '2019', '2020'],
        autoPlay: true,
        playInterval: 1000,
      },
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default TimelineChart;
