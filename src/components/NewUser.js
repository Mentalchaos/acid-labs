import React from 'react';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from './MyModal';
import '../css/all.css';

const openModal = () => {
    ModalManager.open( <div className="modalContainer"> <MyModal /></div>);
}

const NewUser = () => {
    return (
        <div className="container-register">
            <button onClick={() => openModal()}>New user</button>
        </div>
    )
}

NewUser.displayName = 'NewUser';

export default NewUser;