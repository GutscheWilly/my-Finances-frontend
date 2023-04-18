import React from 'react';

function FormGroup({ label, htmlFor, children, icon }) {
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={htmlFor} className="form-label">{icon} {label}</label>
            {children}
        </div>
    );
}

export default FormGroup;
