import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 

const ChartComponent = ({ salesData }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const renderChart = () => {
      if (chartRef.current && salesData.length > 0) {
        // Destroy previous chart instance if it exists
        if (chartInstance) {
          chartInstance.destroy();
        }

        // Render new chart instance
        const ctx = chartRef.current.getContext('2d');
        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: salesData.map((sale) => sale.date),
            datasets: [
              {
                label: 'Sales',
                data: salesData.map((sale) => sale.price),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
        });
      }
    };

    renderChart();

    return () => {
      // Cleanup function to destroy the chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [salesData]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
