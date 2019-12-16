import React from "react";
import Binary from "../assets/binary.png";
import Calendar from "../assets/calendar.png";
import Computer from "../assets/computer.png";
import Placeholder from "../assets/placeholder.png";
import Programmer from "../assets/programmer.png";
import Boxman from "../assets/boxman.png";
import Ellipse from "../assets/ellipse.png";

class About extends React.Component
{
  render() {
    return (
      <section id="about">
        <div className="wrapper">
          <div className="about-header block-header">
            <div><div/><span> О проекте</span></div>
          </div>
          <div id="boxman">
            <img src={Boxman} alt={Boxman}/>
            <img src={Ellipse} alt={Ellipse}/>
          </div>
          <div className="about-body">
            <div id="full-info">
              <img src={Binary} alt={Binary} className="img-field"/>
              <p className="header-column-mobile"><span className="highlight">что?</span></p>
              <div className="text-info">
                <p><span className="highlight header-column">что?</span></p>
                <p><span className="headerlight bold-inside"></span><span className="headerlight bold-inside"></span></p>
                <p><span className="highlight bold-inside"></span></p>
                <p><span className="highlight bold-inside">Хакатон</span> - «марафон программистов», где небольшие команды специалисты из разных областей разработки программного обеспечения (программисты, дизайнеры, менеджеры) сообща работают над решением какой-либо проблемы.</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    )
  }
}

export default About;