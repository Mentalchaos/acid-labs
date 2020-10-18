import React from 'react';
import User from './User';
import '../css/all.css';

const UserTable = ({ data }) => {
    return(
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="green">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data => {
                    const {id, name, description } = data;
                    return(  
                        <User
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                        />
                    )
                    })
                }
                </tbody>
                </table>
        </div>
    )
}

UserTable.displayName = 'Table';

export default UserTable;