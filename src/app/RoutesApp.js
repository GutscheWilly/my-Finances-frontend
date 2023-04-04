import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';
import Launch from '../pages/launch/Launch';
import RegisterLaunch from '../pages/launch/RegisterLaunch';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register-user" element={ <RegisterUser /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/launches" element={ <Launch /> } />
                <Route path="/register-launch" element={ <RegisterLaunch /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
