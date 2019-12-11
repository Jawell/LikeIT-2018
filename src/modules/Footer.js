import React from 'react';
import LogoLikeIT from '../assets/logo.svg';
import LogoBest from '../assets/best-logo.svg';
import FB from '../assets/fb-symbol.png';
import Instagram from '../assets/instagram-symbol.png';

class Footer extends React.Component
{
  render() {
    return(
      <footer>
        <div className="wrapper">
          <img id="likeit" src={LogoLikeIT} alt={LogoLikeIT}/>
          <div className="line">
            <div className="link" id="fb">
              <img src={FB} alt={FB}/>
              <a href="https://facebook.com/BEST.Zaporizhzhya">facebook.com/BEST.Zaporizhzhya</a>
            </div>
//telegram
            <div className="link" id="inst">
              <img src={Instagram} alt={Instagram}/>
              <a href="https://instagram.com/best_zaporizhzhya">instagram.com/best_zaporizhzhya</a>
            </div>
            <p id="copyright">Copyright 2018 ©BEST Zaporizhzhya. Все права защищены</p>
          </div>
          <img id="best" src={LogoBest} alt={LogoBest}/>
          <p id="copyright-mobile">Copyright 2018 ©BEST Zaporizhzhya</p>
        </div>
      </footer>
    )
  }
}

export default Footer;