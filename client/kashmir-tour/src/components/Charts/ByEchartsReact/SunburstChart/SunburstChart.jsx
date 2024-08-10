import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './SunburstChart.scss';

const SunburstChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Traffic Sources Sunburst Chart',
        left: 'center',
        top: 'top',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params.name}: ${params.value}`;
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for better readability
        borderRadius: 4,
        padding: 10,
        textStyle: {
          color: '#fff',
        },
      },
      series: {
        type: 'sunburst',
        data: [
          {
            name: 'Traffic Sources',
            itemStyle: { color: '#f39c12' }, // Bright orange
            children: [
              {
                name: 'Google',
                itemStyle: { color: '#3498db' }, // Bright blue
                children: [
                  { name: 'Organic Search', value: 40, itemStyle: { color: '#e74c3c' } }, // Red
                  { name: 'Paid Search', value: 25, itemStyle: { color: '#2ecc71' } }, // Green
                ],
              },
              {
                name: 'Social Media',
                itemStyle: { color: '#9b59b6' }, // Purple
                children: [
                  { name: 'Instagram', value: 30, itemStyle: { color: '#f1c40f' } }, // Yellow
                  { name: 'Facebook', value: 20, itemStyle: { color: '#1abc9c' } }, // Turquoise
                ],
              },
              {
                name: 'Referral',
                itemStyle: { color: '#e67e22' }, // Orange
                children: [
                  { name: 'Blogs', value: 15, itemStyle: { color: '#e74c3c' } }, // Red
                  { name: 'Partners', value: 10, itemStyle: { color: '#2ecc71' } }, // Green
                ],
              },
            ],
          },
        ],
        radius: ['20%', '90%'],
        label: {
          show: true,
          fontSize: 12,
          color: '#fff',
          formatter: '{b}', // Display only the name
          position: 'inside', // Place text inside the slices
          rotate: 0, // Adjust rotation
          align: 'center', // Align text to the center
          verticalAlign: 'middle', // Align text vertically in the middle
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
      },
    };
  };

  return (
    <div className="sunburst-chart">
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default SunburstChart;
