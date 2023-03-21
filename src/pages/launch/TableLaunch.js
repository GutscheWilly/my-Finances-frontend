import React from 'react';

function TableLaunch() {
    return (
        <table className="table table-hover">
            <thead className="table-primary">
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Type</th>
                    <th>Month</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody className="table-secondary">
                <tr>
                    <td>Churras</td>
                    <td>$ 1000</td>
                    <td>Revenue</td>
                    <td>July</td>
                    <td>Confirmed</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableLaunch;
