import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './FunnelChart.scss';

const FunnelChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Funnel Chart',
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'funnel',
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Impression' },
          ],
          itemStyle: {
            color: '#8e44ad',
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

export default FunnelChart;
