import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LiquidFillChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Liquid Fill Chart',
      },
      series: [
        {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '50%',
          waveAnimation: true,
          backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20,
          },
          outline: {
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: '#156ACF',
            },
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

export default LiquidFillChart;
