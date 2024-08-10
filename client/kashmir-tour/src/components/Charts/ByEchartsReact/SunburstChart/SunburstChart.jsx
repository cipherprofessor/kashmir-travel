import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './SunburstChart.scss';

const SunburstChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Sunburst Chart',
      },
      series: {
        type: 'sunburst',
        data: [
          {
            name: 'Grandparent',
            children: [
              {
                name: 'Parent1',
                children: [
                  { name: 'Child1', value: 5 },
                  { name: 'Child2', value: 10 },
                ],
              },
              {
                name: 'Parent2',
                children: [
                  { name: 'Child3', value: 20 },
                  { name: 'Child4', value: 25 },
                ],
              },
            ],
          },
        ],
        radius: ['20%', '90%'],
        itemStyle: {
          color: '#e74c3c',
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

export default SunburstChart;
