import React from 'react';

class Header extends React.Component
{
    render() {
        return (
            <sector className="header">
                <div className="header-background">
                    <div className="wrapper">
                        <div className="logo"/>
                        <div className="header-info">
                            <p><span className="highlight-text">IT-хакатон в Запорожье</span></p>
                            <p><span className="highlight-text">&#60;</span><span className="header-text">BEST</span><span className="normal-text"> Competition<br/>for </span><span className="header-text">Geeks</span><span className="highlight-text">&#47;&#62;</span></p>
                            <p>До конца <span className="highlight-text">регистрации</span> осталось</p>
                            <div>
                                <div className="timer-block day">
                                    <p className="digit">32</p>
                                    <p className="word">дней</p>
                                </div>
                                <div className="timer-block hour">
                                    <p className="digit">16</p>
                                    <p className="word">часов</p>
                                </div>
                                <div className="timer-block second">
                                    <p className="digit">44</p>
                                    <p className="word">секунд</p>
                                </div>
                            </div>
                            <a href="https://docs.google.com/forms/d/1yZTTsO9liKYFruzPYB5mV3FOW6L-8oLYgVwVJ8LJbmQ/edit?usp=sharing" id="register">Регистрация</a>
                        </div>
                    </div>
                </div>
            </sector>
        );
    }
}

export default Header;