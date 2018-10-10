import React from 'react';

class DividerPoly extends React.Component
{
  render() {
    return(
      <section id="divider_1">
        <svg className="poly" width="100%" height="7.135vw">
          <clipPath id="divider-poly" clipPathUnits="objectBoundingBox">
            <polyline points="0,0.97 0.4884,0.7 0.4730,0.3 1,0 1,0.01 0.4750,0.31 0.4904,0.71 0,0.98"></polyline>
          </clipPath>
          <rect width="100%" height="100%" clipPath="url(#divider-poly)" fill="none" style={polyline}></rect>
        </svg>
      </section>
    )
  }
}

const polyline = {
  stroke: "#fbab18",
  strokeWidth: "7.135vw",
};

export default DividerPoly;