import React from 'react';
import '../styles/ToolTip.css';

const ToolTip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default ToolTip;
