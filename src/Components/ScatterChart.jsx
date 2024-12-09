import React from "react";
import ChartComponent from "./ChartComponent";
import { Chart } from "react-chartjs-2";

const ScatterChart = ({ data }) => {
    const scatterPlotData = {
     
      datasets: [
        {
            label: 'Profits and Expenses',
            data: data.expenses.map((expense, index) => ({
              x: expense,
              y: data.profits[index],
            })),
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }
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