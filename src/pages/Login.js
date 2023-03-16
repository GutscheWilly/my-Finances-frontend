import React from 'react';
import { useState } from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { showErrorMessage } from '../components/Toastr';

import LocalStorageService from '../service/local-storage/LocalStorageService';
import UserService from '../service/user/UserService';
import NavigateService from '../service/navigate/NavigateService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userService = new UserService();
    const navigateService = NavigateService();

    const signIn = async () => {
        const loginInput = {
            email: email,
            password: password
        };

        await userService.validateLogin(loginInput)
            .then(response => {
                const loggedUser = response.data;
                LocalStorageService.addItem('logged_user', loggedUser);
                navigateService.navigateToHome();
            })
            .catch(error => {
                const errorMessage = error.response.data;
                showErrorMessage(errorMessage);
            });
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
                                            <button onClick={navigateService.navigateToRegisterUser} className="btn btn-warning mt-3">Register a new account</button>
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
