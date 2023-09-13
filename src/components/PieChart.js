import React from 'react';
import './PieChart.css';

const PieChart = ({ slice_data }) => {
  const totalPercentage = slice_data.reduce((total, slice) => total + parseFloat(slice.slice_percentage), 0);

  let startAngle = 0;

  return (
    <div className="pie-chart-container">
      <svg viewBox="0 0 250 250" className="pie-chart"> {/* Adjust the viewBox size */}
        {slice_data.map((slice, index) => {
          const percentage = parseFloat(slice.slice_percentage);
          const sliceAngle = (percentage / totalPercentage) * 360;
          const endAngle = startAngle + sliceAngle;
          const largeArcFlag = sliceAngle > 180 ? 1 : 0;
          //svg path data using commands based on start,end,& largearcFlag angles for displaying slice of piechart
          const pathData = `
            M 40 40
            L ${40 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180))} ${40 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180))}
            A 40 40 0 ${largeArcFlag} 1 ${40 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180))} ${40 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180))}
            Z
          `;

          // Calculate the position for the text element for placing text label of slice
          const textX = 40 + 30 * Math.cos(((startAngle + sliceAngle / 2) - 90) * (Math.PI / 180));
          const textY = 40 + 30 * Math.sin(((startAngle + sliceAngle / 2) - 90) * (Math.PI / 180));

          startAngle = endAngle;

          return (
            <g key={index}>
              <path
                d={pathData}
                fill={`#${slice.slice_Colors}`} // Use slice_Colors property
              />
              {/* Create a text element for data display */}
              <text x={textX} y={textY} fontSize="6px" fill="black">
                {slice.slice_name} {slice.slice_percentage}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PieChart;
