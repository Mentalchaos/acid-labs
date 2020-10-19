import React from 'react';

const User = ({ id, name, city, email, phone, handleChange, removeUser }) => {
    return (
        <tr>
            <td><input className="inputValue" id={`name-${id}`} defaultValue={name} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`email-${id}`} defaultValue={email} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`city-${id}`} defaultValue={city} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`phone-${id}`} defaultValue={phone} onChange={ handleChange } /></td>
            <td className="container-buttons">
                <button id={`button-${id}`} onClick={removeUser}>Remove</button>
            </td>
        </tr>
    )
}

User.displayName = 'User';

export default User;