import React from 'react';
import ReactEcharts from 'echarts-for-react';

const DonutChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Traffic Source',
          type: 'pie',
          radius: ['50%', '70%'], // Inner radius and outer radius to create a donut shape
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: 'Direct', itemStyle: { color: '#3498db' } },
            { value: 310, name: 'Email', itemStyle: { color: '#e74c3c' } },
            { value: 234, name: 'Affiliate', itemStyle: { color: '#2ecc71' } },
            { value: 135, name: 'Video Ads', itemStyle: { color: '#f1c40f' } },
            { value: 1548, name: 'Search Engine', itemStyle: { color: '#9b59b6' } },
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

export default DonutChart;
