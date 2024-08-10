import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Sales Data',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30],
          itemStyle: {
            color: (params) => {
              // Define the color for each bar
              const colorList = [
                '#2ecc71', // Mon
                '#3498db', // Tue
                '#e74c3c', // Wed
                '#9b59b6', // Thu
                '#f1c40f', // Fri
                '#e67e22', // Sat
                '#1abc9c', // Sun
              ];
              return colorList[params.dataIndex];
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

export default BarChart;
