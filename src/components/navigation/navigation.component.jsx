import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
    return(
        <Fragment>
            <ul className="navigation-buttons">
                <li className="nav-button"><Link to='/dashboard'>Dashboard</Link></li>
                <li className="nav-button"><Link to='/dragondex'>Dragondex</Link></li>
                <li className="nav-button"><Link to='/store'>Store</Link></li>
                <li className="nav-button"><Link to='/account'>My Account</Link></li>
            </ul>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;