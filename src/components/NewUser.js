import React from 'react';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from './MyModal';
import PropTypes from 'prop-types';

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

NewUser.propTypes = {
    addNewUser: PropTypes.func
};

NewUser.displayName = 'NewUser';

export default NewUser;