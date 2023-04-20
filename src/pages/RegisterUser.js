import React from 'react';
import { useState } from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../components/Toastr';
import icons from '../components/Icons';

import UserService from '../service/user/UserService';
import RegisterUserService from '../service/user/RegisterUserService';
import NavigateService from '../service/navigate/NavigateService';

function RegisterUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userService = new UserService();
    const registerUserService = RegisterUserService();
    const navigateService = NavigateService();

    const register = async () => {
        const userData = {
            name: name,
            email: email,
            password: password
        };

        await userService.registerUser(userData)
            .then(() => {
                navigateService.navigateToLogin();
                showSuccessMessage('Registration successful!');
            })
            .catch(error => {
                const errorMessage = error.response.data;
                showErrorMessage(errorMessage);
            });
    };

    const handleWithRegister = () => {
        try {
            registerUserService.validateUserData(name, email, password, confirmPassword);
            register();
        }
        catch (warningMessage) {
            showWarningMessage(warningMessage);
        }
    };

    return (
        <Card title="Register User">
            <div className="row group justify-content-center">
                <div className="col-lg-6">
                    <div className="bs-component">
                        <FormGroup label="Name:" htmlFor="inputName" icon={icons.user}>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="name"
                                onChange={ (event) => setName(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="Email:" htmlFor="inputEmail" icon={icons.email}>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                onChange={ (event) => setEmail(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="Password:" htmlFor="inputPassword" icon={icons.password}>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                onChange={ (event) => setPassword(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="Confirm Password:" htmlFor="inputConfirmPassword" icon={icons.confirmPassword}>
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword"
                                name="confirmPassword"
                                onChange={ (event) => setConfirmPassword(event.target.value) }
                            />
                        </FormGroup>
                    </div>
                    <div className="group d-flex justify-content-center mt-5">
                        <button title="Register" onClick={handleWithRegister} className="btn btn-success">{icons.register} Register</button>
                        <button title="Cancel" onClick={navigateService.navigateToLogin} className="btn btn-danger">{icons.cancel} Cancel</button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default RegisterUser;
