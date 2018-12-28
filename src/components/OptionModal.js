import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
<Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeModal} // allows close by Esc or clicking outside the modal
    contentLabel="Selected Option"  // required attribute (accessibility)
>
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.closeModal}>Okay</button>
</Modal>
);

export default OptionModal;