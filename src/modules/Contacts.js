import React from 'react';
import MO from '../assets/mo.jpg';
import FR from '../assets/fr.jpg';
import Phone from '../assets/phone-symbol.png';
import Email from '../assets/email-symbol.png';

class Contacts extends React.Component
{
  render() {
    return(
      <section id="contacts">
        <div className="wrapper">
          <div className="about-header block-header">
            <div><div/><span> контакты</span></div>
          </div>
          <div id="contacts-body">
            <div className="contact">
              <img src={MO} alt={MO}/>
              <p className="mo-mobile"><span>главный организатор</span></p>
              <div>
                <p className="mo"><span>главный организатор</span></p>
                <p style={name}>Александр Лаговский</p>
                <div>
                  <img src={Phone} alt={Phone}/>
                  <p>+38 (068) 927 33 47</p>
                </div>
                <div>
                  <img src={Email} alt={Email}/>
                  <p>alex.lahovsky@BEST.eu.org</p>
                </div>
              </div>
            </div>

            <div className="contact">
              <img src={FR} alt={FR}/>
              <p className="mo-mobile"><span>корпоративные связи</span></p>
              <div>
                <p className="mo"><span>корпоративные связи</span></p>
                <p style={name}>Катерина Назаренко</p>
                <div>
                  <img src={Phone} alt={Phone}/>
                  <p>+38 (093) 414 00 48</p>
                </div>
                <div>
                  <img src={Email} alt={Email}/>
                  <p>kateryna.nazarenko@BEST.eu.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const name = {
  color: "white"
};

export default Contacts;