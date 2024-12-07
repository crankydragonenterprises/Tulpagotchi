import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

function LogInForm() {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div className="form-container">
            <form id="loginForm">
                <FormInput label="Username" type="text" htmlFor="username" id="username" name="username" />
                <FormInput label="Password" type="password" htmlFor="password" id="password" name="password" />
                <div className="buttons-container">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' buttonType='google' onClick={logGoogleUser}>
                        Google sign in
                    </CustomButton>
                </div>
                <div id="errorMessage" className="error"></div>
            </form>
        </div>
    )
}

export default LogInForm;