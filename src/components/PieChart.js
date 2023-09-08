import React, { useState, useEffect } from 'react';
import './PieChart.css';

const PieChart = ({ slice_data }) => {
  const [slicesData, setSlicesData] = useState([]);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const totalPercentage = slice_data.reduce((total, slice) => total + parseFloat(slice.slice_percentage), 0);
    const fixedAngle = 360 / slice_data.length;

    const slicesData = slice_data.map((slice, index) => ({
      name: slice.slice_name,
      percentage: parseFloat(slice.slice_percentage),
      angle: temp + index * fixedAngle, // Calculate the angle based on index
    }));

    setSlicesData(slicesData);
  }, [slice_data, temp]);

  return (
    <div className="pie-chart-container">
      <div className="pie-chart">
        {slicesData.map((slice, index) => (
          <div
            key={index}
            className="slice"
            style={{
              transform: `rotate(${slice.angle}deg)`, // Use slice.angle here
            }}
          >
            <span className="label">
              {slice.name}
              <br />
              <span className="percentage">{slice.percentage}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
