import React from 'react';
import OrganizersPhoto from '../assets/organizers.jpg';

class Organizers extends React.Component
{
  render() {
    return(
      <section id="organizers">
        <div className="wrapper">
          <div className="about-header block-header">
            <p><span>&#62;</span><span> организаторы</span></p>
          </div>
          <div id="organizers-info">
            <img src={OrganizersPhoto} alt={OrganizersPhoto}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Organizers;