import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './LineChart.scss';

const LineChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

    svg.append('path')
      .data([data])
      .attr('d', line)
      .attr('class', 'line');

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default LineChart;
