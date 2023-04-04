import React from 'react';
import { useState, useEffect } from 'react';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import MenuOption from '../../components/MenuOption';
import TableLaunch from './TableLaunch';
import { showWarningMessage, showErrorMessage, showSuccessMessage } from '../../components/Toastr';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'

import LaunchService from '../../service/launch/LaunchService';
import { monthsOptionList, launchTypesOptionList } from '../../service/launch/LaunchService';
import LocalStorageService from '../../service/local-storage/LocalStorageService';
import NavigateService from '../../service/navigate/NavigateService';

function Launch() {
    const userId = LocalStorageService.getItem('logged_user').id;
    
    const [year, setYear] = useState();
    const [description, setDescription] = useState();
    const [month, setMonth] = useState();
    const [type, setType] = useState();
    const [launchList, setLaunchList] = useState([]);

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [launchToBeDelete, setLaunchToBeDelete] = useState({});

    const launchService = new LaunchService();
    const navigateService = NavigateService();

    const searchLaunches = async () => {  
        const filter = {
            userId: userId,
            year: year,
            description: description,
            month: month,
            type: type
        };

        await launchService.searchLaunches(filter)
            .then(response => {
                const foundLaunches = response.data;

                if (foundLaunches.length === 0) {
                    showWarningMessage('No launch found!');
                }

                setLaunchList(foundLaunches);
            })
            .catch(error => {
                const errorMessage = error.data;
                showErrorMessage(errorMessage);
            });
    };

    const deleteLaunch = async () => {
        const id = launchToBeDelete.id;

        await launchService.deleteLaunch(id)
            .then(() => {
                searchLaunches();
                showSuccessMessage('Launch Deleted!');
            })
            .catch(error => {
                const errorMessage = error.data;
                showErrorMessage(errorMessage);
            });

        resetConfirmDialog();
    };

    const openConfirmDialog = (launch) => {
        setShowConfirmDialog(true);
        setLaunchToBeDelete(launch);
    };

    const resetConfirmDialog = () => {
        setShowConfirmDialog(false);
        setLaunchToBeDelete({});
    };

    const confirmDialogFooter = (
        <div>
            <Button onClick={deleteLaunch} icon="pi pi-check" label="Confirm"></Button>
            <Button onClick={resetConfirmDialog} icon="pi pi-times" label="Cancel"></Button>  
        </div>
    );

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
                        <FormGroup label="Description:" htmlFor="inputDescription">
                            <input
                                type="text"
                                className="form-control"
                                id="inputDescription"
                                placeholder="Enter description"
                                onChange={ event => setDescription(event.target.value) }
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
                            <button onClick={navigateService.navigateToRegisterLaunch} type="button" className="btn btn-outline-light">Add Launch</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component mt-4">  
                        <TableLaunch launchList={launchList} deleteAction={openConfirmDialog} />
                    </div>
                </div>
            </div>

            <Dialog 
                header="Delete Confirmation" 
                visible={showConfirmDialog} 
                footer={confirmDialogFooter}
                style={{ width: '50vw' }} 
                onHide={() => setShowConfirmDialog(false)}
            >
                <p className="m-0">
                    Do you really want to delete this launch?
                </p>
            </Dialog>
        </Card>
    );
}

export default Launch;
