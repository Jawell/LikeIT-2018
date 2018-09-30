import React from 'react';
import header from '../assets/header.svg';
import logo from '../assets/logo.svg'

class Header extends React.Component
{
    render() {
        return (
            <sector className="header">
                <div style={backHeaderImg}>
                    <div className="wrapper">
                        <div className="logo" style={logoHeader}/>
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
                            <a href="#" id="register">Регистрация</a>
                        </div>
                    </div>
                </div>
            </sector>
        );
    }
}

let logoHeader = {
    background: `url(${logo}) no-repeat`,
    width: "14.5vw",
    height: "2.74vw"
};

let backHeaderImg = {
    background: `url(${header})`,
    backgroundSize: "100vw",
    width: "100vw",
    height: "36.6vw"
};

export default Header;