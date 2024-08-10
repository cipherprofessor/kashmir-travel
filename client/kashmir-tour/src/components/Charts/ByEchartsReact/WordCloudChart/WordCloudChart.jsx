import React from 'react';
import ReactEcharts from 'echarts-for-react';

const WordCloudChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Word Cloud Chart',
      },
      tooltip: {},
      series: [
        {
          type: 'wordCloud',
          shape: 'circle',
          sizeRange: [12, 50],
          rotationRange: [-90, 90],
          textStyle: {
            normal: {
              color: () => `rgb(${Math.round(Math.random() * 160)}, ${Math.round(Math.random() * 160)}, ${Math.round(Math.random() * 160)})`,
            },
          },
          data: [
            { name: 'HTML', value: 10000 },
            { name: 'CSS', value: 6181 },
            { name: 'JavaScript', value: 4386 },
            { name: 'React', value: 4055 },
            { name: 'Node.js', value: 2467 },
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

export default WordCloudChart;
