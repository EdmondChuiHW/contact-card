import React, { useState } from 'react';
import { ClickArea } from '../ClickArea';
import { PureCounter } from './PureCounter';

export const Counter = ({ count = 0 }) => {
  const [countS, setState] = useState(count);

  return <ClickArea onClick={() => setState(countS + 1)}>
    <PureCounter count={countS}/>
  </ClickArea>;
};
