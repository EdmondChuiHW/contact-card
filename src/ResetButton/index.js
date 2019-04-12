import React from 'react';
import { ClickArea } from '../ClickArea';
import { identity } from 'ramda';

export const ResetButton = ({ onClick = identity }) => <>
  <ClickArea onClick={onClick}>
    <div style={{ padding: '16px' }}>NEW GAME</div>
  </ClickArea>
</>;
