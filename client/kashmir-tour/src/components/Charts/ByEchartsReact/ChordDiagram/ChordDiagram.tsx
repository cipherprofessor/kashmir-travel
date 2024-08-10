import React from 'react';
import ReactECharts from 'echarts-for-react';
import './ChordDiagram.scss';

const ChordDiagram: React.FC = () => {
  const option = {
    series: [
      {
        type: 'chord',
        data: [
          { name: 'Group 1' },
          { name: 'Group 2' },
          { name: 'Group 3' }
        ],
        matrix: [
          [0, 10, 20],
          [10, 0, 30],
          [20, 30, 0]
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};

export default ChordDiagram;
