import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';




const OptionModal = (props) =>{
    return (
        <Modal 
            isOpen={!!props.selectedModal}
            contentLabel="selected Option"
            onRequestClose={props.handleCloseOptionModal}
        >
            <h3>selected Options</h3>
            {props.selectedModal && <p>{props.selectedModal}</p>}
            <button onClick={props.handleCloseOptionModal}>close</button>
        </Modal>
    )
};

export default OptionModal