import React from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

function RegisterLaunch() {
    return (
        <Card title="Register Launch">
            <div className="row col-md-12">
                <FormGroup htmlFor="inputDescription" label="* Description:">
                    <input id="inputDescription" type="text" className="form-control" />
                </FormGroup>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <FormGroup htmlFor="inputYear" label="* Year:">
                        <input id="inputYear" type="text" className="form-control" />
                    </FormGroup>
                </div>

                <div className="col-md-6">
                    <FormGroup htmlFor="inputMonth" label="* Month:">
                        <input id="inputMonth" type="text" className="form-control" />
                    </FormGroup>
                </div>
            </div>
        </Card>
    );
}

export default RegisterLaunch;
