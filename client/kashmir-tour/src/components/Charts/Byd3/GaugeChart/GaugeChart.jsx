import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './GaugeChart.scss';

const GaugeChart = ({ value, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const radius = Math.min(width, height) / 2;
    const arcWidth = 20;
    const arc = d3.arc()
      .innerRadius(radius - arcWidth)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(d => (-Math.PI / 2) + (d / 100) * Math.PI);

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    svg.append('path')
      .data([value])
      .attr('d', d => arc(d))
      .attr('class', 'gauge');

    svg.append('circle')
      .attr('r', radius - arcWidth / 2)
      .attr('class', 'gauge-center');
  }, [value, width, height]);

  return <svg ref={ref}></svg>;
};

export default GaugeChart;
