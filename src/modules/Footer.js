import React from 'react';
import LogoLikeIT from '../assets/logo.svg';
import LogoBest from '../assets/best-logo.svg';
import FB from '../assets/fb-symbol.png';
import Instagram from '../assets/instagram-symbol.png';
import TL  from '../assets/tl-symbol.png';

class Footer extends React.Component
{
 state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var str = new Date().toDateString();
    var date = str.substr(-4,4);
    this.setState({ date });
  };
  render() {
   const { date } = this.state;
    return(

      <footer>
      <script>

               var d = new Date;
                   document.getElementById('years').innerHTML = d.getFullYear();

              </script>
        <div className="wrapper">
          <img id="likeit" src={LogoLikeIT} alt={LogoLikeIT}/>
          <div className="line">
            <div className="link" id="fb">
              <img src={FB} alt={FB}/>
              <a href="https://facebook.com/BEST.Zaporizhzhya">facebook.com/BEST.Zaporizhzhya</a>
            </div>
             <div className="link" id="tl">
              <img src={TL} alt={TL}/>
              <a href="https://t.me/likeit20">t.me/likeit20</a>
            </div>
            <div className="link" id="inst">
              <img src={Instagram} alt={Instagram}/>
              <a href="https://instagram.com/best_zaporizhzhya">instagram.com/best_zaporizhzhya</a>
            </div>
         
            <p id="copyright">Copyright {date} ©BEST Zaporizhzhya. Все права защищены</p>
          </div>
          <img id="best" src={LogoBest} alt={LogoBest}/>
          <p id="copyright-mobile">Copyright {date} ©BEST Zaporizhzhya</p>
        </div>
      </footer>
    )
  }
}

export default Footer;