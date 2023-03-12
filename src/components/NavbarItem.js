import React from 'react';

function NavbarItem({ href, label }) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={href}>{label}</a>
        </li>
    );
}

export default NavbarItem;
