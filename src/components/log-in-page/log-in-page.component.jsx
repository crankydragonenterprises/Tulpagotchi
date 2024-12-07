import React from "react";
import LogInForm from "../log-in-form/log-in-form.component";
import CustomImage from "../image/image.component";

import './log-in-page.styles.scss';

import DragonImage from '../../images/tulpagotchi-images/Dragon/Basic/Basic_Adult/Basic_Adult_Black_White.png'

const LogInPage = () => {
    return(
        <div className="login-page-container">
            <div className="login-page-image-container">
            {/* This is the image column */}
                <CustomImage sourceURI={DragonImage} altText='black and white dragon' height='300'/>
            </div>
            <div className="login-page-form-container">
            {/* This is the form column */}
                <LogInForm />
            </div>
        </div>
    )
}

export default LogInPage;