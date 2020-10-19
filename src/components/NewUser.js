import React from 'react';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from './MyModal';

const NewUser = ({ addNewUser }) => {
    const openModal = () => {
        ModalManager.open( <div className="modalContainer"> <MyModal addNewUser={addNewUser} /></div>);
    }
    return (
        <div className="container-register">
            <button onClick={() => openModal()}>New user</button>
        </div>
    )
}

NewUser.displayName = 'NewUser';

export default NewUser;