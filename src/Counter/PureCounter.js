import React from 'react';
import './PureCounter.css';

export const PureCounter = ({ count = 0 }) => {
  return <div className='PureCounter'>
    {count}
  </div>;
};
