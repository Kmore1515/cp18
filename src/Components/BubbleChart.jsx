import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
    const minSales = Math.min(...data.sales);
    const maxSales = Math.max(...data.sales);
    const bubbleSizes = (sale) => {
        let minSize = 7;
        let maxSize = 25;
        return (
            minSize + ((sale - minSales)/(maxSales - minSales)) * (maxSize - minSize)
        );
    };
    const bubbleChartData = {
 
      datasets: [
        {
          label: 'Profits',
          data: data.sales.map((sale, index) => ({
            x: data.profits[index],
            y: data.expenses[index],
            r: bubbleSizes(sale),

          })),
          backgroundColor: 'rgba(34, 193, 34, 0.8)',
          borderColor: 'rgba(34, 193, 34, 1)',  
          borderWidth: 2,

        },
        {
            label: "Expenses",
            data: data.expenses.map((expense, index) => ({
                x: data.profits[index],
                y: expense,
                r: bubbleSizes(expense),
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.8)', 
            borderColor: 'rgba(255, 99, 132, 1)', 
            borderWidth: 2,
        }
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
      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};
export default BubbleChart;