import React from "react";

import './form-input.styles.scss';

function FormInput ( { label, type, htmlFor, id, name } ) {
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={id} name={name} required />
        </div>
    )
}

export default FormInput;