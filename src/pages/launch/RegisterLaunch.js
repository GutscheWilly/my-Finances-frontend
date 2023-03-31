import React from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import { monthsOptionList, launchTypesOptionList } from '../../service/launch/LaunchService';

function RegisterLaunch() {
    return (
        <Card title="Register Launch">
            <div className="row col-md-13">
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
                        <MenuOption id="inputMonth" options={monthsOptionList} className="form-control" />
                    </FormGroup>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <FormGroup htmlFor="inputValue" label="* Value:">
                        <input id="inputValue" type="text" className="form-control" />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputType" label="* Type:">
                        <MenuOption id="inputType" options={launchTypesOptionList} className="form-control" />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputStatus" label="Status:">
                        <input id="inputStatus" type="text" className="form-control" disabled />
                    </FormGroup>
                </div>
            </div>

            <div className="group d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-success">Register</button>
                <button type="button" className="btn btn-danger">Cancel</button>
            </div>
        </Card>
    );
}

export default RegisterLaunch;
