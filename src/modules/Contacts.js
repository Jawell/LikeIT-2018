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
                <p style={name}>Максим Войтих</p>
                <div>
                  <img src={Phone} alt={Phone}/>
                  <p>+38 (067) 321 38 61</p>
                </div>
                <div>
                  <img src={Email} alt={Email}/>
                  <p>maxim.voytih@BEST.eu.org</p>
                </div>
              </div>
            </div>

            <div className="contact">
              <img src={FR} alt={FR}/>
              <p className="mo-mobile"><span>корпоративные связи</span></p>
              <div>
                <p className="mo"><span>корпоративные связи</span></p>
                <p style={name}>Игорь Худолей</p>
                <div>
                  <img src={Phone} alt={Phone}/>
                  <p>+38 (063) 968 60 09</p>
                </div>
                <div>
                  <img src={Email} alt={Email}/>
                  <p>maxim.voytih@BEST.eu.org</p>
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