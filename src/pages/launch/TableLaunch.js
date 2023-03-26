import React from 'react';

function TableLaunch(props) {
    const { launchList } = props;

    const launches = launchList.map(launch => {
        const {
            id,
            description,
            value,
            type,
            month,
            status
        } = launch;

        return (
            <tr key={id}>
                <td>{description}</td>
                <td>${value}</td>
                <td>{type}</td>
                <td>{month}</td>
                <td>{status}</td>
            </tr>
        );
    });

    return (
        <table className="table table-hover">
            <thead className="table-secondary">
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Type</th>
                    <th>Month</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody className="table-primary">
                {launches}
            </tbody>
        </table>
    );
}

export default TableLaunch;
