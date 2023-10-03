import React from 'react';
import './Modal.css';

const Modal = ({ children, modalBoolean, closeModal }) => {

    console.log("Modal.jsx modal : "+modalBoolean);

    if (!modalBoolean) {
        return null
    }

    return (
        <div className='modal'>
            <div className='overlay' onClick={() => {
                closeModal();
            }}></div>
            {children}
        </div>
    )
}

export { Modal }