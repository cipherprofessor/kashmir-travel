import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './PolarAreaChart.scss';

const PolarAreaChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const radius = Math.min(width, height) / 2;
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const angleSlice = (Math.PI * 2) / data.length;

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(d => radius * d.value)
      .startAngle((d, i) => i * angleSlice)
      .endAngle((d, i) => (i + 1) * angleSlice);

    svg.selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('class', 'polar-area');
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default PolarAreaChart;
