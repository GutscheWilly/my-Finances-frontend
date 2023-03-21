import React from 'react';

function MenuOption(props) {
    const { optionList } = props;

    const options = optionList.map(option => {
        const label = option.label;
        const value = option.value;

        return (
            <option key={label} value={value}>{label}</option>
        );
    });

    return (
        <select {...props}>
            {options}
        </select>
    );
}

export default MenuOption;
