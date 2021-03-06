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
                            {/*  <p>До конца <span className="highlight-text">регистрации</span> осталось</p>
                                                       <div>
                                                           <div className="timer-block day">
                                                               <p id="day" className="digit">32</p>
                                                               <p className="word">дней</p>
                                                           </div>
                                                           <div className="timer-block hour">
                                                               <p id="hour" className="digit">16</p>
                                                               <p className="word">часов</p>
                                                           </div>
                                                           <div className="timer-block second">
                                                               <p id="second" className="digit">44</p>
                                                               <p className="word">секунд</p>
                                                           </div>
                                                       </div>
                                                       <a href="https://docs.google.com/forms/d/1yZTTsO9liKYFruzPYB5mV3FOW6L-8oLYgVwVJ8LJbmQ/edit?usp=sharing" className="button">Регистрация</a>*/}

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