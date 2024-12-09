import { useEffect, useState } from 'react'
import './App.css'
import BarChart from './Components/BarChart'
import LineChart from './Components/LineChart'
import ScatterChart from './Components/ScatterChart'
import BubbleChart from './Components/BubbleChart'

function App() {
const [chartData, setChartData] = useState(null);

useEffect(() => {
  fetch('/financial_data (1).json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);

if (!chartData) {
  return <div>Loading...</div>;
}

return (
    <>
          <BarChart data={chartData} />

          <LineChart data={chartData} />

          <ScatterChart data={chartData} />

          <BubbleChart data={chartData} />
    </>
  );
}

export default App;