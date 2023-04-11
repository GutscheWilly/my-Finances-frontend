import ApiService from '../api/ApiService';

export const monthsOptionList = [
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

export const launchTypesOptionList = [
    {label: 'Select...', value: ''},
    {label: 'Revenue',   value: 'REVENUE'},
    {label: 'Expense',   value: 'EXPENSE'}
];

class LaunchService extends ApiService {

    constructor() {
        super('/api/launches');
    }

    searchLaunches(filter) {
        return this.get('', filter);
    }

    searchLaunchById(launchId, userId) {
        const filter = {
            launchId: launchId,
            userId: userId
        };

        return this.searchLaunches(filter);
    }

    deleteLaunch(id) {
        return this.delete(`/${id}`);
    }

    registerLaunch(launch) {
        return this.post('', launch);
    }

    updateLaunch(id, newDatas) {
        return this.put(`/${id}`, newDatas);
    }

    updateLaunchStatus(id, status) {
        return this.put(`/${id}/update-status`, { status: status });
    }
}

export default LaunchService;
