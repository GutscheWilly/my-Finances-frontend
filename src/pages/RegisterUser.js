import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

function RegisterUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="container">
            <Card title="Register User">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
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
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default RegisterUser;
