import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './BubbleChart.scss';

const BubbleChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);

    const radiusScale = d3.scaleSqrt()
      .domain([0, d3.max(data, d => d.radius)])
      .range([0, 50]);

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', d => radiusScale(d.radius))
      .attr('class', 'bubble');
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default BubbleChart;
