import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './RadarChart.scss';

const RadarChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const radius = Math.min(width, height) / 2;
    const angleSlice = (Math.PI * 2) / data.length;

    const radarLine = d3.lineRadial()
      .radius(d => radius * d.value)
      .angle((d, i) => i * angleSlice)
      .curve(d3.curveLinearClosed);

    svg.append('path')
      .data([data])
      .attr('d', radarLine)
      .attr('class', 'radar');

    svg.selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', d => radius * d.value * Math.cos((d.index * angleSlice) - Math.PI / 2))
      .attr('y1', d => radius * d.value * Math.sin((d.index * angleSlice) - Math.PI / 2))
      .attr('x2', width / 2)
      .attr('y2', height / 2)
      .attr('class', 'radar-line');
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default RadarChart;
