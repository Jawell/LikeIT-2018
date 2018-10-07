import React from 'react';

class DividerDesktop extends React.Component{
  render(){
    return (
      <section id="divider_1">
        <svg className="poly" width="100%" height="7.135vw">
          <clipPath id="third-layer" clipPathUnits="objectBoundingBox">
            <polyline points="0,0.97 0.4884,0.7 0.4730,0.3 1,0 1,0.01 0.4750,0.31 0.4904,0.71 0,0.98"></polyline>
          </clipPath>
          <rect width="100%" height="100%" clip-path="url(#third-layer)" fill="none" style={polyline}></rect>
        </svg>
      </section>
    )
  }
}

let polyline = {
  stroke: "#fbab18",
  strokeWidth: "7.135vw",
};

export default DividerDesktop;