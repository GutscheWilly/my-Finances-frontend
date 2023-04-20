import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import { monthsOptionList, launchTypesOptionList } from '../../service/launch/LaunchService';
import { showErrorMessage, showSuccessMessage, showWarningMessage } from '../../components/Toastr';
import NavigateService from '../../service/navigate/NavigateService';
import icons from '../../components/Icons';

import LaunchService from '../../service/launch/LaunchService';
import LocalStorageService from '../../service/local-storage/LocalStorageService';

function RegisterLaunch() {
    const userId = LocalStorageService.getItem('logged_user').id;

    const launchIdParam = useParams().id;

    const [description, setDescription] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [value, setValue] = useState();
    const [type, setType] = useState();
    const [status, setStatus] = useState();

    const launchService = new LaunchService();
    const navigateService = NavigateService();

    const currentLaunchDataState = () => {
        return {
            userId: userId,
            description: description,
            year: year,
            month: month,
            value: value,
            type: type
        };
    };

    const isThereLaunchToBeUpdate = () => {
        return launchIdParam !== undefined;
    };

    const registerLaunch = async () => {
        const launch = currentLaunchDataState();

        await launchService.registerLaunch(launch)
            .then( () => {
                navigateService.navigateToSearchLaunches();
                showSuccessMessage('Launch registered successful!');
            })
            .catch( error => {
                const errorMessage = error.response.data;
                showWarningMessage(errorMessage);
            });
    };

    const requestLaunchToBeUpdate = async () => {
        if (isThereLaunchToBeUpdate()) {
            await launchService.searchLaunchById(launchIdParam, userId)
                .then( response => {
                    const launch = response.data[0];
                    
                    setDescription(launch.description);
                    setYear(launch.year);
                    setMonth(launch.month);
                    setValue(launch.value);
                    setType(launch.type);
                    setStatus(launch.status);
                });
        }
    };

    const updateLaunch = async () => {
        const updatedLaunchData = currentLaunchDataState();
        updatedLaunchData['status'] = status;

        if (type === '') {
            showErrorMessage('Enter a valid type!');
            return;
        }

        await launchService.updateLaunch(launchIdParam, updatedLaunchData)
            .then( () => {
                navigateService.navigateToSearchLaunches();
                showSuccessMessage('Launch updated successful!');
            })
            .catch( error => {
                const errorMessage = error.response.data;
                showErrorMessage(errorMessage);
            })
    };

    const cancelRegister = () => {
        navigateService.navigateToSearchLaunches();
    };

    const getTitle = () => {
        if (isThereLaunchToBeUpdate()) {
            return 'Update Launch';
        }

        return 'Register Launch';
    };

    const mainButton = () => {
        if (isThereLaunchToBeUpdate()) {
            return ( <button title="Update Launch" onClick={updateLaunch} type="button" className="btn btn-dark"><i class="pi pi-save"></i> Update</button> );
        }

        return ( <button title="Register Launch" onClick={registerLaunch} type="button" className="btn btn-success"><i class="pi pi-save"></i> Register</button> );
    };

    useEffect( () => {
        requestLaunchToBeUpdate();
    }, []);

    return (
        <Card title={ getTitle() }>
            <div className="row col-md-13">
                <FormGroup htmlFor="inputDescription" label="Description:" icon={icons.description}>
                    <input onChange={ event => setDescription(event.target.value) } id="inputDescription" type="text" className="form-control" value={description} />
                </FormGroup>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <FormGroup htmlFor="inputYear" label="Year:" icon={icons.year}>
                        <input onChange={ event => setYear(event.target.value) } id="inputYear" type="text" className="form-control" value={year} />
                    </FormGroup>
                </div>

                <div className="col-md-6">
                    <FormGroup htmlFor="inputMonth" label="Month:" icon={icons.month}>
                        <MenuOption onChange={ event => setMonth(event.target.value) } id="inputMonth" options={monthsOptionList} className="form-control" value={month} />
                    </FormGroup>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <FormGroup htmlFor="inputValue" label="Value:" icon={icons.value}>
                        <input onChange={ event => setValue(event.target.value) } id="inputValue" type="text" className="form-control" value={value} />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputType" label="Type:" icon={icons.type}>
                        <MenuOption onChange={ event => setType(event.target.value) } id="inputType" options={launchTypesOptionList} className="form-control" value={type} />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputStatus" label="Status:" icon={icons.status}>
                        <input onChange={ event => setStatus(event.target.value) } id="inputStatus" type="text" className="form-control" value={status} disabled />
                    </FormGroup>
                </div>
            </div>

            <div className="group d-flex justify-content-center mt-4">
                { mainButton() }
                <button title="Cancel" onClick={cancelRegister} type="button" className="btn btn-danger"><i class="pi pi-times"></i> Cancel</button>
            </div>
        </Card>
    );
}

export default RegisterLaunch;
