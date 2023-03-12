import React from 'react';
import NavbarItem from './NavbarItem';

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container">
                <a href="" className="navbar-brand">my Finances</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="/" label="Home" />
                        <NavbarItem href="/" label="Launches" />
                        <NavbarItem href="/register-user" label="Register" />
                        <NavbarItem href="/login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
