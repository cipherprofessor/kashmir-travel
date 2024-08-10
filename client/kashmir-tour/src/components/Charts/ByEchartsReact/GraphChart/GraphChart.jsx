import React from 'react';
import ReactEcharts from 'echarts-for-react';

const GraphChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Force-Directed Graph',
      },
      tooltip: {},
      legend: {
        data: ['Person'],
      },
      series: [
        {
          name: 'Person',
          type: 'graph',
          layout: 'force',
          data: [
            { name: 'John', symbolSize: 50 },
            { name: 'Alice', symbolSize: 60 },
            { name: 'Bob', symbolSize: 70 },
            { name: 'Mike', symbolSize: 55 },
          ],
          links: [
            { source: 'John', target: 'Alice' },
            { source: 'Alice', target: 'Bob' },
            { source: 'Bob', target: 'Mike' },
            { source: 'Mike', target: 'John' },
          ],
          roam: true,
          label: {
            show: true,
          },
          force: {
            repulsion: 1000,
          },
          lineStyle: {
            color: '#1f78b4',
            curveness: 0.3,
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

export default GraphChart;
