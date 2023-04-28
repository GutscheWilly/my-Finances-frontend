import React from 'react';
import currencyFormatter from 'currency-formatter';

import icons from '../../components/Icons';

function TableLaunch(props) {
    const { 
        launchList,
        deleteAction,
        editAction,
        updateStatusAction
    } = props;

    const launches = launchList.map(launch => {
        const {
            id,
            description,
            value,
            type,
            month,
            status
        } = launch;

        const shouldDisabledButtonToSetStatus = () => {
            return status !== 'PENDENT';
        }

        return (
            <tr key={id}>
                <td>{description}</td>
                <td>{currencyFormatter.format(value, { locale: 'en-US' })}</td>
                <td>{type}</td>
                <td>{month}</td>
                <td>{status}</td>
                <td>
                    <button title="Confirm" disabled={shouldDisabledButtonToSetStatus()} type="button" className="btn btn-success" onClick={ () => updateStatusAction(id, 'CONFIRMED') }><i className="pi pi-check-circle"></i></button>
                    <button title="Cancel" disabled={shouldDisabledButtonToSetStatus()} type="button" className="btn btn-danger" onClick={ () => updateStatusAction(id, 'CANCELED') }><i className="pi pi-times-circle"></i></button>
                    <button title="Edit" type="button" className="btn btn-dark" onClick={ () => editAction(id) }><i className="pi pi-pencil"></i></button>
                    <button title="Delete" type="button" className="btn btn-warning" onClick={ () => deleteAction(launch) }><i className="pi pi-trash"></i></button>
                </td>
            </tr>
        );
    });

    return (
        <table className="table table-hover">
            <thead className="table-secondary">
                <tr>
                    <th>{icons.description} Description</th>
                    <th>{icons.value} Value</th>
                    <th>{icons.type} Type</th>
                    <th>{icons.month} Month</th>
                    <th>{icons.status} Status</th>
                    <th>{icons.config} Config</th>
                </tr>
            </thead>

            <tbody className="table-primary">
                {launches}
            </tbody>
        </table>
    );
}

export default TableLaunch;
