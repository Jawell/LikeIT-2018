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
              {/*<p>Мероприятие состоит из двух частей: <span className="headerlight bold-inside">Ярмарки Карьеры</span> и <span className="headerlight bold-inside">Хакатона</span>.</p>*/}
              {/*<p><span className="highlight bold-inside">Ярмарка Карьеры</span> - это 3-часовая презентация ведущих IT-компаний Украины и мира.</p>*/}

                <p><span className="headerlight bold-inside"></span><span className="headerlight bold-inside"></span></p>
                <p><span className="highlight bold-inside"></span></p>
                <p><span className="highlight bold-inside">Хакатон</span> - «марафон программистов», где небольшие команды специалисты из разных областей разработки программного обеспечения (программисты, дизайнеры, менеджеры) сообща работают над решением какой-либо проблемы.</p>
              </div>
            </div>

           {/*  <div id="short-info">

                          <div id="calendar" className="cell-info">
                            <img src={Calendar} alt={Calendar} className="img-field"/>
                            <div className="short-info-cell">
                              <p><span className="highlight header-column">когда?</span></p>
                              <p>30 ноября - 1 декабря</p>
                            </div>
                          </div>

                          <div id="place" className="cell-info">
                            <img src={Placeholder} alt={Placeholder} className="img-field"/>
                            <div className="short-info-cell">
                              <p><span className="highlight header-column">где?</span></p>
                              <p>Запорожье, ул.Победы 70Б, "Козак-палац"</p>
                            </div>
                          </div>

                          <div id="participation" className="cell-info">
                            <img src={Computer} alt={Computer} className="img-field"/>
                            <div className="short-info-cell">
                              <p><span className="header-column">участие бесплатное</span></p>
                            </div>
                          </div>

                          <div id="num" className="cell-info">
                            <img src={Programmer} alt={Programmer} className="img-field"/>
                            <div className="short-info-cell">
                              <p><span className="highlight header-column">количество участников</span></p>
                              <p><span className="headerlight bold-inside">100</span> человек</p>
                            </div>
                          </div>

                        </div>*/}
          </div>
        </div>
      </section>
    )
  }
}

export default About;