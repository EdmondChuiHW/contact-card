import React from 'react';
import { identity } from 'ramda';
import { ClickArea } from '../ClickArea';
import './StartLeftOrRight.css';

export const StartLeftOrRight = ({ setStartedLeft = identity }) => <>
  <div className='StartLeftOrRight'>
    <ClickArea onClick={() => setStartedLeft(true)}>
      <div className='button-content left'>START LEFT</div>
    </ClickArea>
    <ClickArea onClick={() => setStartedLeft(false)}>
      <div className='button-content'>START RIGHT</div>
    </ClickArea>
  </div>
</>;
