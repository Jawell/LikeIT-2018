import React from 'react';
import Apriorit from '../assets/apriorit.png';
import Microsoft from '../assets/microsoft.png';
import Yandex from '../assets/yandex.png';
import Incode from '../assets/incode.png';
import Betroot from '../assets/betroot.png';
import SPro from '../assets/s-pro.png';
import Ubisoft from '../assets/ubisoft.png';
import GBKSoft from '../assets/gbksoft.png';

class Partners extends React.Component {
  render() {
    return(
      <section id="partners">
        <div className="wrapper">
          <div className="partners">
            <div className="about-header block-header">
              <p><span>&#62;</span><span> партнеры</span></p>
            </div>
            <div className="line">
              <img src={Apriorit} alt={Apriorit}/>
              <img src={Microsoft} alt={Microsoft}/>
              <img src={Yandex} alt={Yandex}/>
              <img src={Incode} alt={Incode}/>
              <img src={Betroot} alt={Betroot}/>
            </div>
            <div className="line">
              <img src={SPro} alt={SPro}/>
              <img src={Ubisoft} alt={Ubisoft}/>
              <img src={GBKSoft} alt={GBKSoft}/>
            </div>

            <div className="mobile-partners">
              <img src={Apriorit} alt={Apriorit}/>
              <img src={Microsoft} alt={Microsoft}/>
              <img src={Yandex} alt={Yandex}/>
              <img src={Incode} alt={Incode}/>
              <img src={Betroot} alt={Betroot}/>
              <img src={SPro} alt={SPro}/>
              <img src={Ubisoft} alt={Ubisoft}/>
              <img src={GBKSoft} alt={GBKSoft}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Partners;