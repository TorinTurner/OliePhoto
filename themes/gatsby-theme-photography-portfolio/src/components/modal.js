import ReactModal from 'react-modal';
import React from 'react';


const Modal = ({isOpen, onClose, children}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Modal"
  >
    {children}
  </ReactModal>
);

export default Modal;
