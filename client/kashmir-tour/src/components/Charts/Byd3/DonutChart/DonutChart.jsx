import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './DonutChart.scss';

const DonutChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const radius = Math.min(width, height) / 2;
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(radius / 3).outerRadius(radius);

    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('class', 'donut');
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default DonutChart;
