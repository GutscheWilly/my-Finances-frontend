import React from 'react';
import { useState, useEffect } from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import TableLaunch from './TableLaunch';
import { showWarningMessage, showErrorMessage } from '../../components/Toastr';

import LaunchService from '../../service/launch/LaunchService';
import { monthsOptionList, launchTypesOptionList } from '../../service/launch/LaunchService';
import LocalStorageService from '../../service/local-storage/LocalStorageService';

function Launch() {
    const userId = LocalStorageService.getItem('logged_user').id;
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [type, setType] = useState();
    const [launchList, setLaunchList] = useState([]);

    const launchService = new LaunchService();

    const searchLaunches = async () => {  
        const filter = {
            userId: userId,
            year: year,
            month: month,
            type: type
        };

        await launchService.searchLaunches(filter)
            .then(response => {
                const foundLaunches = response.data;
                setLaunchList(foundLaunches);

                if (foundLaunches.length === 0) {
                    showWarningMessage('No launch found!');
                }
            })
            .catch(error => {
                const errorMessage = error.data;
                showErrorMessage(errorMessage);
            });
    };

    useEffect(() => {
        searchLaunches();
    }, []);

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
                                onChange={ event => setMonth(event.target.value) }
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
                            <button onClick={searchLaunches} type="button" className="btn btn-outline-success">Search</button>
                            <button type="button" className="btn btn-outline-light">Add Launch</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component mt-4">  
                        <TableLaunch launchList={launchList} />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Launch;
