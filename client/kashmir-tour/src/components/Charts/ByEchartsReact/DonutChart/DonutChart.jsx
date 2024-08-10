import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './DonutChart.scss';

const DonutChart = () => {
  const chartData = [
    { value: 325, name: 'Direct' },
    { value: 310, name: 'Email' },
    { value: 234, name: 'Affiliate' },
    { value: 135, name: 'Video Ads' },
    { value: 158, name: 'Search Engine' },
  ];

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  const getOption = () => ({
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
      formatter: function (params) {
        return `${params.name}: ${params.value}`;
      },
      backgroundColor: 'rgb(0, 0, 0)', // Adjust as needed
      borderRadius: 4,
      padding: 8,
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      formatter: function (name) {
        const dataItem = chartData.find(item => item.name === name);
        return `${name}: ${dataItem ? dataItem.value : 'N/A'}`;
      },
    },
    series: [
      {
        name: 'Traffic Source',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false, // Ensure label does not show on hover
          },
        },
        labelLine: {
          show: true,
        },
        data: chartData,
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `All Sources\n\n${totalValue}`,
          textAlign: 'center',
          fill: '#333',
          fontSize: 16,
          fontFamily: 'Arial',
          fontWeight: 'bold',
        },
      },
    ],
  });

  return (
    <div className="donut-chart-wrapper">
      <div className="donut-chart-container">
        <ReactEcharts
          option={getOption()}
          className="donut-chart"
        />
      </div>
    </div>
  );
};

export default DonutChart;
