import React from 'react';
import { useState, useEffect } from 'react';

import UserService from '../service/user/UserService';
import LocalStorageService from '../service/local-storage/LocalStorageService';
import NavigateService from '../service/navigate/NavigateService.js'

import { showErrorMessage } from '../components/Toastr';
import icons from '../components/Icons';

function Home() {
    const [balance, setBalance] = useState();
    const [userName, setUserName] = useState();

    const userService = new UserService();
    const navigateService = NavigateService();

    const requestAndSetBalance = async (id) => {
        await userService.getBalance(id)
            .then( response => {
                const requestedBalance = response.data;
                setBalance(requestedBalance);
            })
            .catch( error => {
                const errorMessage = error.response.data;
                showErrorMessage(errorMessage);
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
            <p className="lead">Your current balance is: $ {balance}</p>
            <hr className="my-4"/>
            <p className="lead"></p>

            <p className="lead">Here, you can add new launches or search by them</p>

            <div className="mt-4"> 
                <button title="Add a new Launch" onClick={navigateService.navigateToRegisterLaunch} className="btn btn-info btn-lg">
                    {icons.add} Add launch
                </button>

                <button title="Search by Launches" onClick={navigateService.navigateToSearchLaunches} className="btn btn-success btn-lg">
                    {icons.search} Search Launch
                </button>
            </div>
        </div>
    );
}

export default Home;
