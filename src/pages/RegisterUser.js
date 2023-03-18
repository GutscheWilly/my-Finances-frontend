import React from 'react';
import { useState } from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { showSuccessMessage, showErrorMessage } from '../components/Toastr';

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
        function validateUserData() {
            const {
                validateName,
                validateEmail,
                validatePassword
            } = registerUserService;

            validateName(name);
            validateEmail(email);
            validatePassword(password, confirmPassword);
        }

        try {
            validateUserData();
            register();
        }
        catch (error) {
            showErrorMessage(error);
        }
    };

    return (
        <Card title="Register User">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component col-lg-6" style={ {position: 'relative', left: '270px'} }>
                        <FormGroup label="* Name:" htmlFor="inputName">
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="name"
                                onChange={ (event) => setName(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="* Email:" htmlFor="inputEmail">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                onChange={ (event) => setEmail(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="* Password:" htmlFor="inputPassword">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                onChange={ (event) => setPassword(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="* Confirm Password:" htmlFor="inputConfirmPassword">
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword"
                                name="confirmPassword"
                                onChange={ (event) => setConfirmPassword(event.target.value) }
                            />
                        </FormGroup>
                    </div>
                    <div className="btn-group mt-5 d-grid gap-3 col-lg-2" style={ {position: 'relative', left: '450px'} }>
                        <button onClick={handleWithRegister} className="btn btn-success">Register</button>
                        <button onClick={navigateService.navigateToLogin} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default RegisterUser;
