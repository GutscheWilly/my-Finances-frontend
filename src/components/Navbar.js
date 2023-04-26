import React from 'react';
import { useState, useEffect } from 'react';

import NavbarItem from './NavbarItem';
import { isUserLogged } from '../service/user/UserService';

function Navbar() {
    const [items, setItems] = useState();

    const modifyItemsState = () => {
        const userLoggedState = (
            <>
                <NavbarItem href="/home" label="Home" />
                <NavbarItem href="/launches" label="Launches" />
            </>
        );

        if (isUserLogged()) {
            setItems(userLoggedState);
            return;
        }

        const userNotLoggedState = (
            <>
                <NavbarItem href="/login" label="Login" />
                <NavbarItem href="/register-user" label="Register" />
            </>
        );

        setItems(userNotLoggedState);
    };

    useEffect( () => {
        modifyItemsState();
    });

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
                        { items }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
