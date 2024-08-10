import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './TreeChart.scss';

const TreeChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Tree Diagram',
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: [
            {
              name: 'Root',
              children: [
                {
                  name: 'Branch 1',
                  children: [{ name: 'Leaf 1' }, { name: 'Leaf 2' }],
                },
                {
                  name: 'Branch 2',
                  children: [{ name: 'Leaf 3' }, { name: 'Leaf 4' }],
                },
              ],
            },
          ],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 10,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },
          expandAndCollapse: true,
          initialTreeDepth: 2,
          animationDuration: 550,
          animationEasing: 'linear',
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

export default TreeChart;
