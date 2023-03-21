import React from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import MenuOption from '../components/MenuOption';

const monthsOptionList = [
    {label: 'Select...', value: ''},
    {label: 'January',   value: 1},
    {label: 'February',  value: 2},
    {label: 'March',     value: 3},
    {label: 'April',     value: 4},
    {label: 'May',       value: 5},
    {label: 'June',      value: 6},
    {label: 'July',      value: 7},
    {label: 'August',    value: 8},
    {label: 'September', value: 9},
    {label: 'October',   value: 10},
    {label: 'November',  value: 11},
    {label: 'December',  value: 12}
];

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
                        <FormGroup label="Month:" htmlFor="inputMonth">
                            <MenuOption className="form-control" optionList={monthsOptionList}/>
                        </FormGroup>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Launch;
