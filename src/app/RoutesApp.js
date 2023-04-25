import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';
import Launch from '../pages/launch/Launch';
import RegisterLaunch from '../pages/launch/RegisterLaunch';

import { Navigate } from 'react-router-dom';
import LocalStorageService from '../service/local-storage/LocalStorageService';

function ProtectedRoute({ children }) {
    const isUserLogged = () => {
        return LocalStorageService.getItem('logged_user') !== null;
    };

    if (isUserLogged()) {
        return children;
    }

    return <Navigate to="/login" />
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
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
