import React from 'react';
import './ClickArea.css';
import { identity } from 'ramda';

const ClickArea = ({ isTouched = false, onClick = identity, children }) => {
  return <div className={isTouched ? 'touched' : ''} onClick={onClick}>
    {children}
  </div>;
};

export default ClickArea;
