import React from 'react';
import { Modal, Effect } from 'react-dynamic-modal';
import PropTypes from 'prop-types';

const MyModal = ({ addNewUser }) => {
    return (
        <Modal effect={Effect.FlipVertical3D} className="modalContainer">
            <div className="user-form">
                <h1>Register</h1>
                <div className="container-input">
                    <label>Name:</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div className="container-input">
                    <label>Email:</label>
                    <input className="add-user-input" isrequired="true" type="email" />
                </div>
                <div className="container-input">
                    <label>City:</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div className="container-input">
                    <label>Phone:</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div className="line"></div>
                <div className="container-button">
                    <button onClick={addNewUser}  className="save-user-button">Save</button>
                </div>
            </div>
            <div className="error-wrap">
                <span className="error-message hidden">Missing fields to validate</span>
            </div>
        </Modal>
    )
}

MyModal.propTypes = {
    addNewUser: PropTypes.func
};

MyModal.displayName = 'MyModal';

export default MyModal;