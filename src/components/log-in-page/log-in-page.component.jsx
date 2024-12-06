import React from "react";
import LogInForm from "../log-in-form/log-in-form.component";
import CustomImage from "../image/image.component";

import './log-in-page.component.scss';

import DragonImage from '../../images/tulpagotchi-images/Dragon/Basic/Basic_Adult/Basic_Adult_Black_White.png'

function LogInPage() {
    return(
        <div className="login-page-container">
            {/* This is the image column */}
            <CustomImage sourceURI={DragonImage} altText='black and white dragon' height='300'/>
            {/* This is the form column */}
            <LogInForm />
        </div>
    )
}

export default LogInPage;