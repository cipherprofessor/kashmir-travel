import React, { useEffect, useRef } from 'react';
import Packery from 'packery';
import Chart from 'chart.js/auto';
import Draggabilly from 'draggabilly';
import './PackeryLayout.scss';

const Dashboard: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    // Initialize Packery
    const pckry = new Packery(grid, {
      itemSelector: '.grid-item',
      gutter: 10,
      percentPosition: true, // Ensure items are positioned based on percentages
      transitionDuration: '0.4s',
    });

    // Make grid items draggable
    const draggies: Draggabilly[] = [];
    grid.querySelectorAll('.grid-item').forEach(item => {
      const draggie = new Draggabilly(item as Element);
      pckry.bindDraggabillyEvents(draggie);
      draggies.push(draggie);
    });

    // Destroy any existing charts before creating new ones
    const destroyChart = (id: string) => {
      const existingChart = Chart.getChart(id);
      if (existingChart) {
        existingChart.destroy();
      }
    };

    const ctxBar = document.getElementById('barChart') as HTMLCanvasElement;
    const ctxDonut1 = document.getElementById('donutChart1') as HTMLCanvasElement;
    const ctxDonut2 = document.getElementById('donutChart2') as HTMLCanvasElement;
    const ctxDonut3 = document.getElementById('donutChart3') as HTMLCanvasElement;
    const ctxHalfDonut = document.getElementById('halfDonutChart') as HTMLCanvasElement;

    destroyChart('barChart');
    destroyChart('donutChart1');
    destroyChart('donutChart2');
    destroyChart('donutChart3');
    destroyChart('halfDonutChart');

    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    const donutData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    new Chart(ctxDonut1, { type: 'doughnut', data: donutData });
    new Chart(ctxDonut2, { type: 'doughnut', data: donutData });
    new Chart(ctxDonut3, { type: 'doughnut', data: donutData });

    new Chart(ctxHalfDonut, {
      type: 'doughnut',
      data: donutData,
      options: {
        rotation: Math.PI,
        circumference: Math.PI,
      },
    });

    // Cleanup on component unmount
    return () => {
      draggies.forEach(draggie => draggie.destroy());
      pckry.destroy();
      destroyChart('barChart');
      destroyChart('donutChart1');
      destroyChart('donutChart2');
      destroyChart('donutChart3');
      destroyChart('halfDonutChart');
    };
  }, []);

  return (
    <div ref={gridRef} className="grid">
      <div className="grid-item">
        <canvas id="barChart"></canvas>
      </div>
      <div className="grid-item">
        <canvas id="donutChart1"></canvas>
      </div>
      <div className="grid-item">
        <canvas id="donutChart2"></canvas>
      </div>
      <div className="grid-item">
        <canvas id="donutChart3"></canvas>
      </div>
      <div className="grid-item">
        <canvas id="halfDonutChart"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
