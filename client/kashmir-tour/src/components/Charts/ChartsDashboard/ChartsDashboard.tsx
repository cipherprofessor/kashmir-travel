import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import './ChartsDashboard.scss';
import BarChart from '../BarChart/BarChart';
import DonutChart from '../DonutChart/DonutChart';
import HalfDonutChart from '../HalfDonutChart/HalfDonutChart';
import LineChart from '../LineChart/LineChart';
import AreaChart from '../AreaChart/AreaChart';
import RadarChart from '../RadarChart/RadarChart';
import PolarAreaChart from '../PolarAreaChart/PolarAreaChart';
import BubbleChart from '../BubbleChart/BubbleChart';
import ScatterPlot from '../ScatterPlot/ScatterPlot';
import GaugeChart from '../GaugeChart/GaugeChart';

const ResponsiveGridLayout = WidthProvider(Responsive);

const ChartDashboard = () => {
  const layout = [
    { i: 'barChart1', x: 0, y: 0, w: 4, h: 4 },
    { i: 'donutChart1', x: 4, y: 0, w: 4, h: 4 },
    { i: 'halfDonutChart1', x: 8, y: 0, w: 4, h: 4 },
    { i: 'lineChart1', x: 12, y: 0, w: 4, h: 4 },
    { i: 'areaChart1', x: 0, y: 4, w: 4, h: 4 },
    { i: 'radarChart1', x: 4, y: 4, w: 4, h: 4 },
    { i: 'polarAreaChart1', x: 8, y: 4, w: 4, h: 4 },
    { i: 'bubbleChart1', x: 12, y: 4, w: 4, h: 4 },
    { i: 'scatterPlot1', x: 0, y: 8, w: 4, h: 4 },
    { i: 'gaugeChart1', x: 4, y: 8, w: 4, h: 4 },
    { i: 'barChart2', x: 8, y: 8, w: 4, h: 4 },
    { i: 'donutChart2', x: 12, y: 8, w: 4, h: 4 },
    { i: 'halfDonutChart2', x: 0, y: 12, w: 4, h: 4 },
    { i: 'lineChart2', x: 4, y: 12, w: 4, h: 4 },
    { i: 'areaChart2', x: 8, y: 12, w: 4, h: 4 },
    { i: 'radarChart2', x: 12, y: 12, w: 4, h: 4 },
    { i: 'polarAreaChart2', x: 0, y: 16, w: 4, h: 4 },
    { i: 'bubbleChart2', x: 4, y: 16, w: 4, h: 4 },
    { i: 'scatterPlot2', x: 8, y: 16, w: 4, h: 4 },
    { i: 'gaugeChart2', x: 12, y: 16, w: 4, h: 4 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      cols={{ lg: 24 }}
      rowHeight={80}
    >
      <div key="barChart1" className="grid-item glassmorphic">
        <BarChart data={[{ label: 'Red', value: 12 }, { label: 'Blue', value: 19 }, { label: 'Yellow', value: 3 }]} width={400} height={300} />
      </div>
      <div key="donutChart1" className="grid-item glassmorphic">
        <DonutChart data={[{ label: 'Red', value: 300 }, { label: 'Blue', value: 50 }, { label: 'Yellow', value: 100 }]} width={300} height={300} />
      </div>
      <div key="halfDonutChart1" className="grid-item glassmorphic">
        <HalfDonutChart data={[{ label: 'Red', value: 300 }, { label: 'Blue', value: 50 }, { label: 'Yellow', value: 100 }]} width={300} height={300} />
      </div>
      <div key="lineChart1" className="grid-item glassmorphic">
        <LineChart data={[{ date: '2024-01-01', value: 50 }, { date: '2024-01-02', value: 100 }, { date: '2024-01-03', value: 75 }]} width={400} height={300} />
      </div>
      <div key="areaChart1" className="grid-item glassmorphic">
        <AreaChart data={[{ date: '2024-01-01', value: 30 }, { date: '2024-01-02', value: 60 }, { date: '2024-01-03', value: 45 }]} width={400} height={300} />
      </div>
      <div key="radarChart1" className="grid-item glassmorphic">
        <RadarChart data={[{ axis: 'A', value: 70 }, { axis: 'B', value: 80 }, { axis: 'C', value: 90 }]} width={400} height={300} />
      </div>
      <div key="polarAreaChart1" className="grid-item glassmorphic">
        <PolarAreaChart data={[{ label: 'A', value: 40 }, { label: 'B', value: 60 }, { label: 'C', value: 80 }]} width={400} height={300} />
      </div>
      <div key="bubbleChart1" className="grid-item glassmorphic">
        <BubbleChart data={[{ x: 30, y: 40, radius: 20 }, { x: 50, y: 60, radius: 30 }]} width={400} height={300} />
      </div>
      <div key="scatterPlot1" className="grid-item glassmorphic">
        <ScatterPlot data={[{ x: 10, y: 20 }, { x: 20, y: 30 }, { x: 30, y: 40 }]} width={400} height={300} />
      </div>
      <div key="gaugeChart1" className="grid-item glassmorphic">
        <GaugeChart value={75} width={400} height={200} />
      </div>
      <div key="barChart2" className="grid-item glassmorphic">
        <BarChart data={[{ label: 'Green', value: 7 }, { label: 'Purple', value: 15 }, { label: 'Orange', value: 20 }]} width={400} height={300} />
      </div>
      <div key="donutChart2" className="grid-item glassmorphic">
        <DonutChart data={[{ label: 'Pink', value: 200 }, { label: 'Teal', value: 150 }, { label: 'Yellow', value: 250 }]} width={300} height={300} />
      </div>
      <div key="halfDonutChart2" className="grid-item glassmorphic">
        <HalfDonutChart data={[{ label: 'Pink', value: 200 }, { label: 'Teal', value: 150 }, { label: 'Yellow', value: 250 }]} width={300} height={300} />
      </div>
      <div key="lineChart2" className="grid-item glassmorphic">
        <LineChart data={[{ date: '2024-02-01', value: 70 }, { date: '2024-02-02', value: 90 }, { date: '2024-02-03', value: 85 }]} width={400} height={300} />
      </div>
      <div key="areaChart2" className="grid-item glassmorphic">
        <AreaChart data={[{ date: '2024-02-01', value: 40 }, { date: '2024-02-02', value: 70 }, { date: '2024-02-03', value: 60 }]} width={400} height={300} />
      </div>
      <div key="radarChart2" className="grid-item glassmorphic">
        <RadarChart data={[{ axis: 'A', value: 60 }, { axis: 'B', value: 70 }, { axis: 'C', value: 80 }]} width={400} height={300} />
      </div>
      <div key="polarAreaChart2" className="grid-item glassmorphic">
        <PolarAreaChart data={[{ label: 'D', value: 50 }, { label: 'E', value: 70 }, { label: 'F', value: 90 }]} width={400} height={300} />
      </div>
      <div key="bubbleChart2" className="grid-item glassmorphic">
        <BubbleChart data={[{ x: 40, y: 50, radius: 25 }, { x: 60, y: 70, radius: 35 }]} width={400} height={300} />
      </div>
      <div key="scatterPlot2" className="grid-item glassmorphic">
        <ScatterPlot data={[{ x: 20, y: 30 }, { x: 30, y: 40 }, { x: 40, y: 50 }]} width={400} height={300} />
      </div>
      <div key="gaugeChart2" className="grid-item glassmorphic">
        <GaugeChart value={50} width={400} height={200} />
      </div>
    </ResponsiveGridLayout>
  );
};

export default ChartDashboard;
