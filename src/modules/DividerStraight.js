import React from 'react';

class DividerStraight extends React.Component
{
  render() {
    return(
      <section id="divider_2">
        <svg className="poly" width="100%" height="7.135vw">
          <clipPath id="divider-straight" clipPathUnits="objectBoundingBox">
            <polyline points="0,0.98 1,0 1,0.02 0,1" stroke-width="3"></polyline>
          </clipPath>
          <rect width="100%" height="100%" clipPath="url(#divider-straight)" fill="none" style={straight}></rect>
        </svg>
      </section>
    )
  }
}

const straight = {
  stroke: "#00A793",
  strokeWidth: "7.135vw"
};

export default DividerStraight;