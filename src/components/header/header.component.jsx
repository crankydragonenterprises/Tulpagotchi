import React, { Fragment, useContext } from "react";

import './header.styles.scss';
import Logo from '../../images/logo.png';
import smallLogo from '../../images/logo_small.png';
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="header">
                <Link className="logo-container" to="/">
                    <img alt="Tulpagotchi logo" id="logo" src={Logo}/>
                    <img alt="Tulpagtochi logo" id="small-logo" height="100px" src={smallLogo} />
                </Link>
                <div className="nav-buttons-container">
                    {
                        currentUser ? (
                            <span id="sign-out" className="nav-link" onClick={signOutUser}>Sign Out</span> )
                            :
                            (<div className="authentication-buttons">
                                <Link to="/log-in" id="log-in" className="nav-link">Log In</Link>
                                <Link to="/sign-up" id="sign-up" className="nav-link">Sign Up</Link>
                            </div>)
                    }
                    <Link to="/contact-us" id="contact-us" className="nav-link">Contact Us</Link>
                </div>
            </div> 
            <Outlet />
        </Fragment>
    )
}

export default Header;