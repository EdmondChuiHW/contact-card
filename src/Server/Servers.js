import { PureServer } from './PureServer';
import React from 'react';
import './Servers.css';

export const Servers = ({ isEven = false, rotateRight = false }) => {
  return <>
    <div className='servers'>
      <div className='server'>
        <PureServer isServing={!isEven} rotateRight={rotateRight}/>
      </div>
      <div className='server'>
        <PureServer isServing={isEven} rotateRight={rotateRight}/>
      </div>
    </div>
  </>;
};
