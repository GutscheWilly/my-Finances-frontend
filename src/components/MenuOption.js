import React from 'react';

function MenuOption(props) {
    const { optionList } = props;

    const options = optionList.map(option => {
        return (
            <option value={option.value}>{option.label}</option>
        );
    });

    return (
        <select {...props}>
            {options}
        </select>
    );
}

export default MenuOption;
