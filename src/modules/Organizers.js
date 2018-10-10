import React from 'react';
import OrganizersPhoto from '../assets/organizers.jpg';
import Logo from '../assets/best-logo-big.svg';

class Organizers extends React.Component
{
  render() {
    return(
      <section id="organizers">
        <div className="wrapper">
          <div className="about-header block-header">
            <p><span>&#62;</span><span> организаторы</span></p>
          </div>
        </div>
        <div className="left-wrapper">
          <div id="organizers-info">
            <img id="best-logo-big" src={Logo} alt={Logo}/>
            <div id="shadow-img">
              <img src={OrganizersPhoto} alt={OrganizersPhoto}/>
            </div>
            <div>
              <div className="wrapper-mobile">
                <p>
                  <span className="headerlight">BEST (Board of European Students of Technology)</span> – совет студентов технических ВУЗов Европы –постоянно растущая, некоммерческая и неполитическая организация.
                </p>
                <p>
                  Начиная <span className="highlight">с 1989</span> года, эта инновационная студенческая сеть обеспечивает студентов разных специальностей возможностью общения, взаимодействия и культурного
                  обмена, а также предоставляет дополнительное образование в разных сферах
                  человеческих и инженерных знаний.
                </p>
                <p>
                  <span className="highlight">Наша цель</span> - налаживание тесной связи между компаниями и студентами! Ежегодно мы собираем мотивированную молодежь разных специальностей, чтобы дать им возможность получить новые знания и раскрыть свой потенциал.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Organizers;