import React, { Component } from 'react';
import { Modal, Effect} from 'react-dynamic-modal';

class MyModal extends Component {
    render() {
        return(
            <Modal
                effect={Effect.FlipVertical3D} className="modalContainer">
                    <form className="user-form">
                <div>
                    <label>Name</label>
                    <input isrequired="true" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input isrequired="true" type="email" />
                </div>
                <div>
                    <label>City</label>
                    <input isrequired="true" type="text" />
                </div>
                <div>
                    <label>Phone</label>
                    <input isrequired="true" type="text" />
                </div>
               <div className="container-button"><button type="submit">Guardar</button></div>
            </form>
            </Modal>
        )
    }
}

MyModal.displayName = 'MyModal';

export default MyModal;