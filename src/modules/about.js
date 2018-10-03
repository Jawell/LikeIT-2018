import React from "react";
import Binary from "../assets/binary.png";
import Calendar from "../assets/calendar.png";
import Computer from "../assets/computer.png";
import Placeholder from "../assets/placeholder.png";
import Programmer from "../assets/programmer.png";

class About extends React.Component
{
  render() {
    return (
      <section id="about">
        <div className="wrapper">
          <div className="about-header block-header">
            <p><span>&#62;</span><span> О проекте</span></p>
          </div>
          <div className="about-body">
            <table>
              <tbody>
                <tr>
                  <td className="img-field what-field">
                    <img src={Binary} alt={Binary}/>
                  </td>
                  <td id="full-info-cell">
                    <p><span className="highlight field-header">что?</span></p>
                    <p>Мероприятие состоит из двух частей: <span className="headerlight">Ярмарки Карьерв</span> и <span className="headerlight">Хакатона</span>.
                    <p><span className="highlight">Ярмарка Карьеры</span> - это 3-часовая презентация  ведущих IT-компаний Украины и мира.</p>
                    <p><span className="highlight">Хакатон</span> - «марафон программистов», где небольшие команды специалисты из разных областей разработки программного обеспечения (программисты, дизайнеры, менеджеры) сообща работают над решением какой-либо проблемы.</p></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table id="short-info">
              <tbody>
                <tr>
                  <td className="img-field">
                    <img src={Calendar} alt={Calendar}/>
                  </td>
                  <td className="margin-cell">
                    <p className="highlight field-header">когда?</p>
                    <p><span className="headerlight">24-25</span> ноября</p>
                  </td>

                  <td className="img-field">
                    <img src={Placeholder} alt={Placeholder}/>
                  </td>
                  <td>
                    <p className="highlight field-header">где?</p>
                    <p>Coming soon</p>
                  </td>
                </tr>

                <tr>
                  <td className="img-field">
                    <img src={Computer} alt={Computer}/>
                  </td>
                  <td className="margin-cell">
                    <p className="highlight field-header">участие бесплатно</p>
                  </td>

                  <td className="img-field">
                    <img src={Programmer} alt={Programmer}/>
                  </td>
                  <td>
                    <p className="highlight field-header">количество человек</p>
                    <p><span className="headerlight">100</span> человек</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default About;