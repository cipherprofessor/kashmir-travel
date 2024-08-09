import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const HalfDonutChart = ({ data, width, height }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous content

    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal().range(['#FF6384', '#36A2EB', '#FFCE56']);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70)
      .startAngle(-Math.PI)
      .endAngle(Math.PI);

    const pie = d3.pie().sort(null);

    svg.attr('width', width).attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    svg.selectAll('path')
      .data(pie(data))
      .enter().append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));

    svg.selectAll('text')
      .data(pie(data))
      .enter().append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(d => d.data.value);
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default HalfDonutChart;
