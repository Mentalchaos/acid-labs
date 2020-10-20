import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id, name, city, email, phone, handleChange, removeUser }) => {
    return (
        <tr>
            <td><input className="inputValue" id={`name-${id}`} defaultValue={name} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`email-${id}`} defaultValue={email} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`city-${id}`} defaultValue={city} onChange={ handleChange } /></td>
            <td><input className="inputValue" id={`phone-${id}`} defaultValue={phone} onChange={ handleChange } /></td>
            <td className="container-buttons">
                <button className="remove-button" id={`button-${id}`} onClick={removeUser}>Remove</button>
            </td>
        </tr>
    )
}

User.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    handleChange: PropTypes.func,
    removeUser: PropTypes.func
};

User.displayName = 'User';

export default User;