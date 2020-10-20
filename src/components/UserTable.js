import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

const UserTable = ({ data, handleChange, removeUser }) => {
    return (
    data ? <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th className="green">Action</th>
                </tr>
            </thead>
            <tbody>
                { data.map(data => {
                const { id, name, email, phone } = data;
                const { city } = data.address
                return(  
                    <User
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        phone={phone}
                        city={city}
                        handleChange={handleChange}
                        removeUser={removeUser}
                    />
                )})
            }
            </tbody>
            </table> 
        </div> : 
        <div className="no-data">
            <p>There is nothing to see here</p>
            <p className="green">maybe try to add another user :)</p>
        </div>
    )
}

UserTable.displayName = 'Table';

UserTable.propTypes = {
    data: PropTypes.array,
    handleChange: PropTypes.func,
    removeUser: PropTypes.func
};

export default UserTable;