import React from "react";

import './header.component.scss';
import Logo from '../../images/logo.png';

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Tulpagotchi logo" id="logo"/>
            <p id="log-in">Log In</p>
            <p id="contact-us">Contact Us</p>
        </div>
    )
}

export default Header;