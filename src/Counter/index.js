import React, { useState } from 'react';
import ClickArea from '../TouchArea/ClickArea';
import Counter from './Counter';

export default ({ count = 0 }) => {
  const [countS, setState] = useState(count);

  return <ClickArea onClick={setState}>
    <Counter count={countS}/>
  </ClickArea>;
};
