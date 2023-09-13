import React from 'react';
import './App.css';
import PieChart from './components/PieChart';

function App() {
  const slice_data = [
    { slice_name: "Apple", slice_percentage: 10, slice_Colors: 'ff5733' },
    { slice_name: "Redme", slice_percentage: 20, slice_Colors: '33ff57' },
    { slice_name: "Jio", slice_percentage: 20, slice_Colors: '5733ff' },
    { slice_name: "LG", slice_percentage: 15, slice_Colors: 'ffff33' },
    { slice_name: "Moto", slice_percentage: 25, slice_Colors: 'ff33ff' },
  ];
  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <div className="center-container">
        <PieChart slice_data={slice_data} />
      </div>
    </div>
  );
}

export default App;
