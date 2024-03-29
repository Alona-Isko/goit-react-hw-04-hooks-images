import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL }) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
    
  
    return createPortal(
        <div 
            className={s.Overlay}
            onClick={handleBackdropClick}
        >
            <div className={s.Modal}>
                <img src={largeImageURL} alt="" />
            </div>
        </div>,
        modalRoot,
    );
}
