import React from 'react';

function FormGroup({ label, htmlFor, children }) {
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={htmlFor} className="form-label">{label}</label>
            {children}
        </div>
    );
}

export default FormGroup;
