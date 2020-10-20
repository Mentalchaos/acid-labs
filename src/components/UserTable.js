import React from 'react';
import User from './User';

const UserTable = ({ data, handleChange, removeUser }) => {
    return (
    <div className="table-container">
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
        </div>
    )
}

UserTable.displayName = 'Table';

export default UserTable;