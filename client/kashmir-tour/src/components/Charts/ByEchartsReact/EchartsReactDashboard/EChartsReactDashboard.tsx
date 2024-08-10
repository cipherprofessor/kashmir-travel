import React, { useState } from 'react';
import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import AreaChart from '../AreaChart/AreaChart';
import RadarChart from '../RadarChart/RadarChart';
import GaugeChart from '../GaugeChart/GaugeChart';
import ScatterChart from '../ScatterChart/ScatterChart';
import FunnelChart from '../FunnelChart/FunnelChart';
import HeatmapChart from '../HeatmapChart/HeatmapChart';
import CandlestickChart from '../CandlestickChart/CandlestickChart';
import BoxplotChart from '../BoxplotChart/BoxplotChart';
import SunburstChart from '../SunburstChart/SunburstChart';
import SankeyChart from '../SankeyChart/SankeyChart';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import './EChartsReactDashboard.scss';
import DonutChart from '../DonutChart/DonutChart';
import CalendarChart from '../CalendarChart/CalendarChart';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  // First Row
  { i: 'donutChart', x: 0, y: 0, w: 8, h: 3.8 },
  { i: 'pieChart', x: 8, y: 0, w: 4, h: 3.8 },
  { i: 'lineChart', x: 12, y: 0, w: 4.5, h: 3.8 },

  // Second Row
  { i: 'areaChart', x: 0, y: 4, w: 5, h: 4 },
  { i: 'radarChart', x: 5, y: 4, w: 5, h: 4 },
  { i: 'gaugeChart', x: 9, y: 4, w: 4, h: 3.5 },

  // Third Row
  { i: 'barChart', x: 0, y: 8, w: 5, h: 4 },
  { i: 'scatterChart', x: 5, y: 8, w: 4.6, h: 4 },
  { i: 'funnelChart', x: 9, y: 8, w: 5, h: 4 },

  // Fourth Row
  { i: 'heatmapChart', x: 0, y: 12, w: 4.5, h: 4 },
  { i: 'candlestickChart', x: 4.5, y: 12, w: 4.5, h: 4 },
  { i: 'boxplotChart', x: 9, y: 12, w: 4.5, h: 4 },

  // Fifth Row
  { i: 'sunburstChart', x: 0, y: 16, w: 4.5, h: 4 },
  { i: 'sankeyChart', x: 4.5, y: 16, w: 4.5, h: 4 },
  { i: 'CalendarChart', x: 9, y: 16, w: 5, h: 2.7 },
];


const EChartsReactDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(isDarkMode); // Check if the state is toggling
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        cols={{ lg: 12 }}
        rowHeight={100}
      >
        <div key="donutChart" className="grid-item">
          <DonutChart />
        </div>
        <div key="pieChart" className="grid-item">
          <PieChart />
        </div>
        <div key="lineChart" className="grid-item">
          <LineChart />
        </div>
        <div key="areaChart" className="grid-item">
          <AreaChart />
        </div>
        <div key="radarChart" className="grid-item">
          <RadarChart />
        </div>
        <div key="gaugeChart" className="grid-item">
          <GaugeChart />
        </div>
        <div key="barChart" className="grid-item">
          <BarChart />
        </div>
        <div key="scatterChart" className="grid-item">
          <ScatterChart />
        </div>
        <div key="funnelChart" className="grid-item">
          <FunnelChart />
        </div>
        <div key="heatmapChart" className="grid-item">
          <HeatmapChart />
        </div>
        <div key="candlestickChart" className="grid-item">
          <CandlestickChart />
        </div>
        <div key="boxplotChart" className="grid-item">
          <BoxplotChart />
        </div>
        <div key="sunburstChart" className="grid-item">
          <SunburstChart />
        </div>
        <div key="sankeyChart" className="grid-item">
          <SankeyChart />
        </div>
        <div key="CalendarChart" className="grid-item">
          <CalendarChart />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default EChartsReactDashboard;
