import React from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';

function Launch() {
    return (
        <Card title="Search Launch">
            <div className="row">
                <div className="col-md-6">
                    <div className="bs-component">
                        <FormGroup label="Year:" htmlFor="inputYear">
                        <input
                            type="text"
                            className="form-control"
                            id="inputYear"
                            placeholder="Enter year"
                        />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Launch;
