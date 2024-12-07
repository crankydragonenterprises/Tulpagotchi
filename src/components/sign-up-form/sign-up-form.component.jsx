import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function SignUpForm() {
    return(
        <div className="form-container">
            <form id="loginForm">
                <FormInput label="Username" type="text" htmlFor="username" id="username" name="username" />
                <FormInput label="Password" type="password" htmlFor="password" id="password" name="password" />
                <FormInput label="Confirm Password" type="password" htmlFor="password" id="confirm-password" name="confirm-password" />
                <CustomButton type='submit'>Sign Up</CustomButton>
                <div id="errorMessage" className="error"></div>
            </form>
        </div>
    )
}

export default SignUpForm;