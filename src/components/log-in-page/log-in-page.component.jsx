import React from "react";
import LogInForm from "../log-in-form/log-in-form.component";
import CustomImage from "../image/image.component";

import './log-in-page.styles.scss';

const LogInPage = () => {
    return(
        <div className="login-page-container">
            <div className="login-page-image-container">
            {/* This is the image column */}
                <CustomImage sourceURI="https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/Dragon/Basic/Basic_Adult/Basic_Adult_Black_White.png" altText='black and white dragon' height='300'/>
            </div>
            <div className="login-page-form-container">
            {/* This is the form column */}
                <LogInForm />
            </div>
        </div>
    )
}

export default LogInPage;