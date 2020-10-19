import React from 'react';

const User = ({ id, name, city, email, phone, handleChange }) => {
    return (
        <tr>
            <td><input id={`name-${id}`} value={name} onChange={ handleChange } /></td>
            <td><input id={`email-${id}`} value={email} onChange={ handleChange } /></td>
            <td><input id={`city-${id}`} value={city} onChange={ handleChange } /></td>
            <td><input id={`phone-${id}`} value={phone} onChange={ handleChange } /></td>
            <td className="container-buttons">
                <button>Edit</button>
                <button>Remove</button>
            </td>
        </tr>
    )
}

User.displayName = 'User';

export default User;