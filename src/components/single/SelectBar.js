import React from 'react';

export default function SelectBar({name, option, current, handleChange}) {
    return(
    <select name={name} value={current} onChange={e => handleChange(e)} >    
        { option.map(value =>
            <option value={value} key={value}> {value} </option>
        )}
    </select>
    )
}