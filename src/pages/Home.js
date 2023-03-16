import React from 'react';
import { useState, useEffect } from 'react';

import UserService from '../service/user/UserService';
import LocalStorageService from '../service/local-storage/LocalStorageService';

function Home() {
    const [balance, setBalance] = useState();
    const [userName, setUserName] = useState();

    const userService = new UserService();

    const requestAndSetBalance = async (id) => {
        await userService.getBalance(id)
            .then(response => {
                const requestedBalance = response.data;
                setBalance(requestedBalance);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        const loggedUser = LocalStorageService.getItem('logged_user');
        const id = loggedUser.id; 
        const name = loggedUser.name;

        requestAndSetBalance(id);
        setUserName(name);
    });

    return (
        <div className="jumbotron">
            <h1 className="display-3">Welcome, {userName}!</h1>
            <p className="lead">Your balance to this month is $ {balance}</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-danger btn-lg" href="" role="button"><i className="fa fa-users"></i>Add launch</a>
            </p>
        </div>
    );
}

export default Home;
