import React from 'react';
import './index.css';

const Popup = ({ message, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <span className="popup-message">{message}</span>
        <button className="popup-close" onClick={closePopup}>X</button>
      </div>
    </div>
  );
};

export default Popup;
