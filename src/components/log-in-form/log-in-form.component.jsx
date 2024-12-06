import React from "react";

function LogInForm() {
    return(
        <div className="form-container">
            <form id="loginForm">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-btn">Log In</button>
                <button type="submit" className="login-btn">Log In with Google</button>
                <div id="errorMessage" className="error"></div>
            </form>
        </div>
    )
}

export default LogInForm;