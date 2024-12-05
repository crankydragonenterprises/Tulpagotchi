import React from "react";

import './header.component.scss';
import Logo from '../../images/logo.png';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt="Tulpagotchi logo" id="logo"/>
            </div>
            <div className="nav-buttons-container">
                <a href="/login" id="log-in">Log In</a>
                <a href="/contact-us" id="contact-us">Contact Us</a>
            </div>
        </div>
    )
}

export default Header;