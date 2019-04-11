import React from 'react';
import './TouchArea.css';

const TouchArea = ({ isTouched = false, children }) => {
  return <div className={isTouched ? 'touched' : ''}>
    {children}
  </div>;
};

export default TouchArea;
