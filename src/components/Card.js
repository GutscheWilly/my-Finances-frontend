import React from 'react';

function Card({ title, children }) {
    return (
        <div className="card md-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;
