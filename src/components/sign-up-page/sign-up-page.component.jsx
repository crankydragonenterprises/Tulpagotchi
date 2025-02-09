import React from "react";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import CustomImage from "../image/image.component";

import './sign-up-page.styles.scss';

const SignUpPage = () => {
    return(
        <div className="sign-up-page-container">
            <div className="sign-up-page-image-container">
            {/* This is the image column */}
                <CustomImage sourceURI="https://tulpagotchi-images.s3.us-east-1.amazonaws.com/images/tulpagotchi-images/Dragon/Basic/Basic_Adult/Basic_Adult_Green_Yellow.png" altText='green and yellow dragon' height='300'/>
            </div>
            <div className="sign-up-page-form-container">
            {/* This is the form column */}
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage;