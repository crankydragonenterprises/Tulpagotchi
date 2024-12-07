import React from "react";

import './header.styles.scss';
import Logo from '../../images/logo.png';
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-container">
                    <img src={Logo} alt="Tulpagotchi logo" id="logo"/>
                </div>
                <div className="nav-buttons-container">
                    <a href="/log-in" id="log-in">Log In</a>
                    <a href="/sign-up" id="sign-up">Sign Up</a>
                    <a href="/contact-us" id="contact-us">Contact Us</a>
                </div>
            </div> 
            <Outlet />
        </div>
    )
}

export default Header;