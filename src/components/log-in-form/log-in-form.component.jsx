import React from "react";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const LogInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }
        catch (error)
        {
            if(error.code === 'auth/invalid-credential')
            {
                alert('invalid username or password');
            }
            else {
                console.log('error logging in', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const logInGoogleUser = async() => {
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        }
        catch(error)
        {
            if(error.code === 'auth/popup-closed-by-user'){
                return;
            }
            else {
                console.log(error);
            }
        }
    }

    return(
        <div className="form-container">
            <form id="loginForm" onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" htmlFor="email" id="email" name="email" required onChange={handleChange} value={email}/>
                <FormInput label="Password" type="password" htmlFor="password" id="password" name="password" onChange={handleChange} value={password} required/>
                <div className="buttons-container">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' buttonType='google' onClick={logInGoogleUser}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default LogInForm;