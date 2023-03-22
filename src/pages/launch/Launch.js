import React from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import TableLaunch from './TableLaunch';

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

const launchTypesOptionList = [
    {label: 'Select...', value: ''},
    {label: 'Revenue',   value: 'REVENUE'},
    {label: 'Expense',   value: 'EXPENSE'}
];

const launches = [
    {
        id: 2,
        description: 'oi',
        value: 1000,
        type: 'REVENUE',
        month: 8,
        status: 'CONFIRMED'
    }
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
                            <MenuOption className="form-control" options={monthsOptionList} />
                        </FormGroup>
                        <FormGroup label="Type:" htmlFor="inputType">
                            <MenuOption className="form-control" options={launchTypesOptionList} />
                        </FormGroup>

                        <div className="mt-4">
                            <button type="button" className="btn btn-outline-success">Search</button>
                            <button type="button" className="btn btn-outline-light">Add Launch</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component mt-4">  
                        <TableLaunch launchList={launches} />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Launch;
