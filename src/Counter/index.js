import React from 'react';
import { ClickArea } from '../ClickArea';
import { PureCounter } from './PureCounter';
import { identity } from 'ramda';

export const Counter = ({ count = 0, incCount = identity }) => <>
  <ClickArea onClick={incCount}>
    <PureCounter count={count}/>
  </ClickArea>
</>;
