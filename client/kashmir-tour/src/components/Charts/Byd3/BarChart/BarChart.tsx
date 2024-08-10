import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './BarChart.scss';

const BarChart = ({ data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value))
      .attr('class', 'bar');

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default BarChart;
