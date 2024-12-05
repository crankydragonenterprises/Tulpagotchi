import React from "react";
import './footer.component.scss';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">Copyright - Cranky Dragon Enterprises 2024</div>
            <div className="give-feedback-link">
                <a href="/give-feedback">Give feedback</a>
            </div>
        </div>
    )
}

export default Footer;