import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './TreeMapChart.scss';

const TreeMapChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'TreeMap',
      },
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: 'Category A',
              value: 40,
              children: [
                { name: 'SubCategory A1', value: 15 },
                { name: 'SubCategory A2', value: 25 },
              ],
            },
            {
              name: 'Category B',
              value: 30,
              children: [
                { name: 'SubCategory B1', value: 10 },
                { name: 'SubCategory B2', value: 20 },
              ],
            },
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

export default TreeMapChart;
