import React from 'react';
import { useState, useEffect } from 'react';

import UserService from '../service/user/UserService';
import LocalStorageService from '../service/local-storage/LocalStorageService';

function Home() {
    const [balance, setBalance] = useState();
    const [userName, setUserName] = useState();

    const userService = new UserService();

    useEffect(() => {
        const loggedUser = LocalStorageService.getItem('logged_user');
        const id = loggedUser.id; 
        const name = loggedUser.name;

        userService.getBalance(id)
        .then(response => setBalance(response.data))
        .catch(erro => console.log(erro));

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
