import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './SplomChart.scss';

const SplomChart = () => {
  const getOption = () => {
    const data = [
      [4.7, 3.2, 1.3, 0.2, 'setosa'],
      [5.0, 3.6, 1.4, 0.2, 'setosa'],
      [7.0, 3.2, 4.7, 1.4, 'versicolor'],
      [6.4, 3.2, 4.5, 1.5, 'versicolor'],
      [6.3, 3.3, 6.0, 2.5, 'virginica'],
      [5.8, 2.7, 5.1, 1.9, 'virginica'],
    ];
    return {
      title: {
        text: 'Scatter Plot Matrix',
      },
      tooltip: {},
      dataset: {
        source: data,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'value',
      },
      series: {
        type: 'scatter',
      },
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '600px' }} />
    </div>
  );
};

export default SplomChart;
