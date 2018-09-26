import React from 'react';
import header from '../assets/header.jpg';
import logo from '../assets/logo.svg'

class Header extends React.Component
{
    render() {
        return (
            <sector className="header">
                <div style={backHeaderImg}>
                    <div className="wrapper">
                        <div className="logo" style={logoHeader}/>
                        <p>IT-хакатон в Запорожье</p>
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
    background: `url(${header}) no-repeat`,
    backgroundSize: "100vw",
    backgroundPositionY: "-15vw",
    width: "100vw",
    height: "36.44vw"
};

export default Header;