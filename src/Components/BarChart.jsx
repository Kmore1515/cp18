import React, { useEffect, useRef } from 'react';
import ChartComponent from './ChartComponent';
import { Chart } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};
export default BarChart;