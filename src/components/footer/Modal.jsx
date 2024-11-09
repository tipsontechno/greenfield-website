// Modal.js
import React from "react";

const Modal = ({ message, showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={closeModal} className="close-btn">
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
