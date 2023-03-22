import React from 'react';

function MenuOption(props) {
    const { options } = props;

    const optionList = options.map(option => {
        const {
            label,
            value
        } = option;

        return (
            <option key={value} value={value}>{label}</option>
        );
    });

    return (
        <select {...props}>
            {optionList}
        </select>
    );
}

export default MenuOption;
