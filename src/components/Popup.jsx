import React, { useState } from 'react';

/**
 * A popup to display message.
 * @param {boolean} show Show or hide the popup. 
 * @param {Function} onClose Callback function to handle closing the popup.
 * @returns 
 */
const Popup = ({ show, onClose, children }) => {
    const [slide, setSlide] = useState('animate-slide-in');
    const [fade, setFade] = useState('animate-fade-in');

    const handleClose = (e) => {
        setSlide('animate-slide-out');
        setFade('animate-fade-out');
        setTimeout(() => {
            onClose();
            setSlide('animate-slide-in');
            setFade('animate-fade-in');
        }, 600);
    };

    return show && (
        <div 
            className={`fixed top-0 flex justify-center items-center w-screen h-screen bg-[#000] bg-opacity-40 ${fade}`}
            onClick={handleClose} 
        >
            <div 
                className={`w-[40vw] h-[40vh] p-8 bg-primary rounded-xl drop-shadow-lg ${slide}`} 
                onClick={e => e.stopPropagation()}
            >
                <div className='w-full h-full overflow-x-hidden overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;