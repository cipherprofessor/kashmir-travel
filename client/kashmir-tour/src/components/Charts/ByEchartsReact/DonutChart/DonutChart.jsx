import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import Tooltip from '../../Tooltip/Tooltip';
import './DonutChart.scss';

const DonutChart = () => {
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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
      show: false, // Disable the default tooltip
    },
    legend: {
      orient: 'vertical',
      right: 0,
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
        data: chartData,
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `All Sources\n${totalValue}`,
          textAlign: 'center',
          fill: '#333',
          fontSize: 16,
          fontFamily: 'Arial',
          fontWeight: 'bold',
        },
      },
    ],
  });

  const handleChartHover = (params, event) => {
    if (event && event.event) {
      setTooltipData({
        title: params.name,
        value: params.value,
      });

      const chartRect = event.event.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        x: event.event.clientX - chartRect.left,
        y: event.event.clientY - chartRect.top,
      });
    }
  };

  const handleLegendHover = (name, event) => {
    const dataItem = chartData.find(item => item.name === name);
    setTooltipData({
      title: name,
      value: dataItem ? dataItem.value : 'N/A',
    });

    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseOut = () => {
    setTooltipData(null);
  };

  return (
    <div className="donut-chart-wrapper" style={{ position: 'relative' }}>
      <div className="donut-chart-container">
        <ReactEcharts
          option={getOption()}
          className="donut-chart"
          onEvents={{
            'mouseover': handleChartHover,
            'mouseout': handleMouseOut,
            'legendselectchanged': handleLegendHover,
          }}
        />
      </div>
      {tooltipData && (
        <Tooltip
          title={tooltipData.title}
          value={tooltipData.value}
          x={tooltipPosition.x}
          y={tooltipPosition.y}
          className="custom-tooltip"
        />
      )}
    </div>
  );
};

export default DonutChart;
