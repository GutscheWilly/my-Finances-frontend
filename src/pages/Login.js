import React from 'react';
import { useState, useEffect } from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { showErrorMessage } from '../components/Toastr';
import icons from '../components/Icons';

import LocalStorageService from '../service/local-storage/LocalStorageService';
import UserService from '../service/user/UserService';
import NavigateService from '../service/navigate/NavigateService';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
    
    useEffect( () => {
        localStorage.clear();
    }, []);

    return (
        <div className="row group d-flex justify-content-center">
            <div className="col-md-6">
                <div className="bs-docs-section">
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Email:" htmlFor="exampleInputEmail" icon={icons.email}>
                                            <input
                                                type="email"
                                                className="form-control" 
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter email"
                                                onChange={ ({ target: { value } }) => setEmail(value) } 
                                            />
                                        </FormGroup>
                                        <FormGroup label="Password:" htmlFor="exampleInputPassword" icon={icons.password}>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword"
                                                placeholder="Enter password"
                                                onChange={ ({ target: { value } }) => setPassword(value) }
                                            />
                                        </FormGroup>
                                        <div className="group d-flex justify-content-center mt-5">
                                            <button onClick={signIn} className="btn btn-success">{icons.signIn} Sign in</button>
                                            <button onClick={navigateService.navigateToRegisterUser} className="btn btn-info">{icons.userPlus} New account</button>
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
