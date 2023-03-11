import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

function RegisterUser() {
    const [name, setName] = useState('');

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
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default RegisterUser;
