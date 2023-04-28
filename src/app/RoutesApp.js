import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';
import Launch from '../pages/launch/Launch';
import RegisterLaunch from '../pages/launch/RegisterLaunch';

import { isUserLogged } from '../service/user/UserService';

function ProtectedRoute({ children }) {
    if (isUserLogged()) {
        return children;
    }

    return <Navigate to="/login" />;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register-user" element={ <RegisterUser /> } />

                <Route 
                    path="/home" 
                    element={ 
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/launches" 
                    element={ 
                        <ProtectedRoute>
                            <Launch />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/register-launch/:id?" 
                    element={ 
                        <ProtectedRoute>
                            <RegisterLaunch />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
