import React, { useState, useEffect } from 'react';

const Popup = ({ message, closePopup }) => {
 const [isVisible, setIsVisible] = useState(true);

 const handleClose = () => {
    setIsVisible(false);
    closePopup();
 };

 useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
 }, []);

 if (!isVisible) {
    return null;
 }

 return (
    <div className="fixed top-10 left-0 w-full flex items-center justify-center">
      <div className="bg-white text-black p-4 rounded-lg shadow-lg">
        <p>{message}

        </p>
      </div>
    </div>
 );
};

export default Popup;