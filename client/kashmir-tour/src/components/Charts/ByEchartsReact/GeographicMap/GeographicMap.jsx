import React from 'react';
import ReactEcharts from 'echarts-for-react';

const GeographicMap = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Geographic Map',
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
          { name: 'Australia', value: 100 },
          { name: 'Brazil', value: 80 },
          { name: 'Canada', value: 60 },
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

export default GeographicMap;
