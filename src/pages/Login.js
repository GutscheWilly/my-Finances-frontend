import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

function Login() {
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
                                                />
                                            </FormGroup>
                                            <FormGroup label="* Password:" htmlFor="exampleInputPassword">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword"
                                                    placeholder="Enter password"
                                                />
                                            </FormGroup>
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
