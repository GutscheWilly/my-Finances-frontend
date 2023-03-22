import React from 'react';
import { useState } from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import TableLaunch from './TableLaunch';

import LaunchService from '../../service/launch/LaunchService';
import LocalStorageService from '../../service/local-storage/LocalStorageService';

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
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [type, setType] = useState();
    const [launchList, setLaunchList] = useState();

    const launchService  = new LaunchService();

    const search = async () => {  
        const filter = {
            userId: LocalStorageService.getItem('logged_user').id,
            year: year,
            month: month,
            type: type
        };

        await launchService.searchLaunches(filter)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                                onChange={ event => setYear(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup label="Month:" htmlFor="inputMonth">
                            <MenuOption
                                id="inputMonth"
                                className="form-control" 
                                options={monthsOptionList}
                                onChange={ event => setMonth(event.target.value)}
                            />
                        </FormGroup>
                        <FormGroup label="Type:" htmlFor="inputType">
                            <MenuOption 
                                id="inputType"
                                className="form-control" 
                                options={launchTypesOptionList} 
                                onChange={ event => setType(event.target.value) }
                            />
                        </FormGroup>

                        <div className="mt-4">
                            <button onClick={search} type="button" className="btn btn-outline-success">Search</button>
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
