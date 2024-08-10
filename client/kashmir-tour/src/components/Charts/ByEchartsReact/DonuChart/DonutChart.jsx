import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './DonutChart.scss';

const DonutChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Traffic Sources',
        left: 'center',
        textStyle: {
          fontFamily: 'Arial',
          fontSize: 16,
          fontWeight: 'bold',
        },
        className: 'chart-title',
      },
      tooltip: {
        trigger: 'item',
        className: 'chart-tooltip',
      },
      legend: {
        orient: 'vertical',
        right: 10, // Position legend to the right
        top: 'center',
        className: 'chart-legend',
      },
      series: [
        {
          name: 'Traffic Source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
            className: 'chart-label',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
              className: 'chart-label-emphasis',
            },
          },
          labelLine: {
            show: false,
            className: 'chart-label-line',
          },
          data: [
            { value: 335, name: 'Direct', className: 'chart-data-item-direct' },
            { value: 310, name: 'Email', className: 'chart-data-item-email' },
            { value: 234, name: 'Affiliate', className: 'chart-data-item-affiliate' },
            { value: 135, name: 'Video Ads', className: 'chart-data-item-video' },
            { value: 1548, name: 'Search Engine', className: 'chart-data-item-search' },
          ],
          className: 'chart-series',
        },
      ],
    };
  };

  return (
    <div className="donut-chart-wrapper">
      <div className="donut-chart-container">
        <ReactEcharts option={getOption()} className="donut-chart" />
      </div>
    </div>
  );
};

export default DonutChart;
