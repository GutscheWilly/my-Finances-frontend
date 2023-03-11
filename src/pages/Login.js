import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div className="container">
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
                                                <button className="btn btn-warning mt-3">Create a new account</button>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
