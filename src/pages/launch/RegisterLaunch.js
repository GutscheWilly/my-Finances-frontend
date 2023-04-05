import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import { monthsOptionList, launchTypesOptionList } from '../../service/launch/LaunchService';
import { showErrorMessage, showSuccessMessage, showWarningMessage } from '../../components/Toastr';
import NavigateService from '../../service/navigate/NavigateService';

import LaunchService from '../../service/launch/LaunchService';
import LocalStorageService from '../../service/local-storage/LocalStorageService';

function RegisterLaunch() {
    const userId = LocalStorageService.getItem('logged_user').id;

    const urlParams = useParams();
    const [launchToBeUpdate, setLaunchToBeUpdate] = useState({});

    const [description, setDescription] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [value, setValue] = useState();
    const [type, setType] = useState();

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
        const launchId = urlParams.id;
        
        if (launchId) {
            await launchService.searchLaunchById(launchId, userId)
                .then( response => {
                    const launch = response.data[0];
                    setLaunchToBeUpdate(launch);
                    setDescription(launch.description);
                    setYear(launch.year);
                    setMonth(launch.month);
                    setValue(launch.value);
                    setType(launch.type);
                });
        }
    };

    const updateLaunch = async () => {
        const launchId = urlParams.id;

        const updatedLaunchData = currentLaunchDataState();
        updatedLaunchData['status'] = launchToBeUpdate.status;

        await launchService.updateLaunch(launchId, updatedLaunchData)
            .then( () => {
                navigateService.navigateToSearchLaunches();
                showSuccessMessage('Launch updated successful!');
            })
            .catch( error => {
                console.log(error);
                const errorMessage = error.response.data;
                showErrorMessage(errorMessage);
            })
    };

    const cancelRegister = () => {
        navigateService.navigateToSearchLaunches();
        setLaunchToBeUpdate({});
    };

    useEffect( () => {
        requestLaunchToBeUpdate();
    }, []);

    return (
        <Card title="Register Launch">
            <div className="row col-md-13">
                <FormGroup htmlFor="inputDescription" label="* Description:">
                    <input onChange={ event => setDescription(event.target.value) } id="inputDescription" type="text" className="form-control" placeholder={launchToBeUpdate.description} />
                </FormGroup>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <FormGroup htmlFor="inputYear" label="* Year:">
                        <input onChange={ event => setYear(event.target.value) } id="inputYear" type="text" className="form-control" placeholder={launchToBeUpdate.year} />
                    </FormGroup>
                </div>

                <div className="col-md-6">
                    <FormGroup htmlFor="inputMonth" label="* Month:">
                        <MenuOption onChange={ event => setMonth(event.target.value) } id="inputMonth" options={monthsOptionList} className="form-control" placeholder={launchToBeUpdate.month} />
                    </FormGroup>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <FormGroup htmlFor="inputValue" label="* Value:">
                        <input onChange={ event => setValue(event.target.value) } id="inputValue" type="text" className="form-control" placeholder={launchToBeUpdate.value} />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputType" label="* Type:">
                        <MenuOption onChange={ event => setType(event.target.value) } id="inputType" options={launchTypesOptionList} className="form-control" placeholder={launchToBeUpdate.type} />
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup htmlFor="inputStatus" label="Status:">
                        <input id="inputStatus" type="text" className="form-control" placeholder={launchToBeUpdate.status} disabled />
                    </FormGroup>
                </div>
            </div>

            <div className="group d-flex justify-content-center mt-4">
                <button onClick={registerLaunch} type="button" className="btn btn-success">Register</button>
                <button onClick={updateLaunch} type="button" className="btn btn-dark">Update</button>
                <button onClick={cancelRegister} type="button" className="btn btn-danger">Cancel</button>
            </div>
        </Card>
    );
}

export default RegisterLaunch;
