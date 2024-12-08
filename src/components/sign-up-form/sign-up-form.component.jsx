import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //confirm the password & confirm password match
        if(password !== confirmPassword)
        {
            //write an error message
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            // setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();
            if(user)
                navigate("/dashboard")
        }
        catch (error) {
            if(error.code === 'auth/email-already-in-use')
            {
                alert('This email already has an account.');
            }
            else if (error.code === 'auth/password-does-not-meet-requirements') {
                alert('Password must be at least 8 characters long');
            }
            else {
                console.log('create user encountered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="form-container">
            <form id="loginForm" onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" htmlFor="displayName" id="displayName" name="displayName" required onChange={handleChange} value={displayName} />
                <FormInput label="Email" type="email" htmlFor="email" id="email" name="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" type="password" htmlFor="password" id="password" name="password" required onChange={handleChange} value={password} />
                <FormInput label="Confirm Password" type="password" htmlFor="password" id="confirm-password" name="confirmPassword" required onChange={handleChange} value={confirmPassword} />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUpForm;