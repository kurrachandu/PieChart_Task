import React from 'react';
import './App.css';
import PieChart from './components/PieChart';

function App() {
  const slice_data = [
    {slice_name: "Apple", slice_percentage: 10 },
    {slice_name: "Redme", slice_percentage: 20 },
    {slice_name: "Jio", slice_percentage: 30 },
    {slice_name: "LG", slice_percentage: 15 },
    {slice_name: "Moto", slice_percentage: 25 }
  ];
  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <PieChart slice_data={slice_data} />
    </div>
  );
}

export default App;
