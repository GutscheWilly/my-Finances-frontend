import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

import UserService from '../service/user/UserService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const navigateToRegisterUser = () => {
        return navigate('/register-user');
    };

    const navigateToHome = () => {
        return navigate('/home');
    };

    const userService = new UserService();

    const signIn = async () => {
        userService.validateLogin({
            email: email,
            password: password
        })
        .then(response => {
            const loggedUser = response.data;
            const loggedUserJson = JSON.stringify(loggedUser);
            localStorage.setItem('logged_user', loggedUserJson);
            navigateToHome();
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="row">
            <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
                <div className="bs-docs-section">
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="* Email:" htmlFor="exampleInputEmail">
                                            <input
                                                type="email"
                                                className="form-control" 
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter email"
                                                onChange={ ({ target: { value } }) => setEmail(value) } 
                                            />
                                        </FormGroup>
                                        <FormGroup label="* Password:" htmlFor="exampleInputPassword">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword"
                                                placeholder="Enter password"
                                                onChange={ ({ target: { value } }) => setPassword(value) }
                                            />
                                        </FormGroup>
                                        <div className="btn-group-vertical" style={ {position: 'relative', left: '155px'} }>
                                            <button onClick={signIn} className="btn btn-success mt-3">Sign in</button>
                                            <button onClick={navigateToRegisterUser} className="btn btn-warning mt-3">Register a new account</button>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;
