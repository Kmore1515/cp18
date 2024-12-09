import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
    const scatterPlotData = {
     
      datasets: [
        {
            label: 'Profits',
            data: data.sales.map((sale, index) => ({
              x: data.profits[index],
              y: data.expenses[index],
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
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)', 
                borderWidth: 2,
        },
      ],
    };
    const scatterPlotOptions = {
        scales:  {
x: {
    title: {
    display: true,
   text: 'Profits',
              },
              beginAtZero: false, 
            },
y: {
   title: {
    display: true,
    text: 'Expenses',
              },
              beginAtZero: false,
            },
          },
        };

      return <ChartComponent type="scatter" data={scatterPlotData} options={scatterPlotOptions} />;
    };

 export default ScatterChart