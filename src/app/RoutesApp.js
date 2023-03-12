import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register-user" element={ <RegisterUser /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
