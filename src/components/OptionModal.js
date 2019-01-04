import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
<Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeModal}   // allows close by Esc or clicking outside the modal
    contentLabel="Selected Option"      // required attribute (accessibility)
    closeTimeoutMS={200}                // delays the removal of the item from DOM
    className="modal"                   // overrides the styles applied 
>
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.closeModal}>Okay</button>
</Modal>
);

export default OptionModal;