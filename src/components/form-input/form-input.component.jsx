import React from "react";

import './form-input.styles.scss';

function FormInput ( { label, htmlFor, ...otherProps} ) {
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            <input {...otherProps} />
        </div>
    )
}

export default FormInput;