import React from 'react';

function FormGroup({ label, htmlFor, children }) {
    return (
        <div className="form-group">
            <label htmlFor={htmlFor} className="form-label mt-2">{label}</label>
            {children}
        </div>
    );
}

export default FormGroup;
