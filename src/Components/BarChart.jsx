import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(34, 193, 34, 0.8)',
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