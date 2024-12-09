import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.sales,
          backgroundColor: 'rgba(34, 193, 34, 0.8)', 
          borderColor: 'rgba(34, 193, 34, 1)', 
        },
      ],
    };
    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};
export default LineChart