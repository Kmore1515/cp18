import React from "react";
import ChartComponent from "./ChartComponent";
import { Chart } from "react-chartjs-2";

const BubbleChart = ({ data }) => {
    const minSales = Math.min(...data.sales);
    const maxSales = Math.max(...data.sales);
    const bubbleSizes = (sale) => {
        let minSize = 5;
        let maxSize = 30;
        return (
            minSize + ((sale - minSales)/(maxSales - minSales)) * (maxSales - minSize)
        );
    };
    const bubbleChartData = {
 
      datasets: [
        {
          label: 'Profits and Expenses',
          data: data.expenses.map((expense, index) => ({
            x: data.profits[index],
            y:expense,
            r: bubbleSizes(data.sales[index]),

          })),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const bubbleChartOptions = {
        scales: {
          x: {
            title: {
                display: true,
                text: "Profits",
            },
            beginAtZero: false,
          },
          y: {
            title: {
                display: true,
                text: "Expenses",
            },
          },
        },
      };
      return <ChartComponent type="bubble" data={barChartData} options={barChartOptions} />;
};
export default BubbleChart;