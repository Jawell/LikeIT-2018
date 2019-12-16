import React from 'react';
//import {timer} from '../modules/Timer';

import Arrow from '../assets/arrow.svg';

class Header extends React.Component
{
  // componentDidMount() {
  //   timer()
  // }

    render() {
        return (
            <section id="header">
                <div className="header-background">
                    <div className="wrapper">
                        <div className="logo"/>
                        <div className="header-info">
                            <p><span className="highlight-text">IT-хакатон в Запорожье</span></p>
                            <p><span className="header-text">&#47;&#47;</span><span className="highlight-text"> LIKE IT</span><span className="header-text"><br/>&#47;&#47;</span><span className="header-text"></span><span className="highlight-text"> CODE IT</span></p>
                           
                            <div>
                              <p>Scroll down</p>
                              <img src={Arrow} alt={Arrow}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const competition = {
  color: "white"
};

export default Header;