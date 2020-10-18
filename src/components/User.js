import React from 'react';

const User = ({ id, name, description }) => {
    return (
        <tr>
            <td><p> {id} </p></td>
            <td><p> {name} </p></td>
            <td><p> {description} </p></td>
            <td className="container-buttons"><button>Editar</button>
                <button>Eliminar</button>
            </td>

        </tr>
    )
}

User.displayName = 'User';

export default User;