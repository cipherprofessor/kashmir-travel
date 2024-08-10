import React from 'react';
import ReactEcharts from 'echarts-for-react';

const ThematicMap = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Thematic Map',
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
      series: {
        type: 'map',
        map: 'world',
        data: [
          { name: 'China', value: 100 },
          { name: 'United States', value: 80 },
          { name: 'India', value: 60 },
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

export default ThematicMap;
