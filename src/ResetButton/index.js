import React from 'react';
import { ClickArea } from '../ClickArea';
import { identity } from 'ramda';
import './ResetButton.css';

export const ResetButton = ({ onClick = identity }) => <>
  <ClickArea onClick={onClick}>
    <div className='button'>NEW GAME</div>
  </ClickArea>
</>;
