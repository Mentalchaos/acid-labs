import React from 'react';
import { Modal, Effect } from 'react-dynamic-modal';

const MyModal = ({ addNewUser }) => {
    return (
        <Modal effect={Effect.FlipVertical3D} className="modalContainer">
            <div className="user-form">
                <div>
                    <label>Name</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input className="add-user-input" isrequired="true" type="email" />
                </div>
                <div>
                    <label>City</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div>
                    <label>Phone</label>
                    <input className="add-user-input" isrequired="true" type="text" />
                </div>
                <div className="container-button">
                    <button onClick={addNewUser}  className="save-user-button">Save</button>
                </div>
            </div>
        </Modal>
    )
}

MyModal.displayName = 'MyModal';

export default MyModal;