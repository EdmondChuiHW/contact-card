import React, { useCallback, useState } from 'react';
import { identity } from 'ramda';
import { PureClickArea } from './PureClickArea';
import { useSingleTimer } from './useSingleTimer';

export const ClickArea = ({ isTouched = false, onClick = identity, children }) => {
  const [isTouchedS, setIsTouched] = useState(isTouched);

  useSingleTimer(() => isTouchedS && setIsTouched(false), 300, undefined);

  const clickHandler = useCallback(() => {
    onClick();
    setIsTouched(true);
  }, undefined);

  return <PureClickArea isTouched={isTouchedS} onClick={clickHandler}>
    {children}
  </PureClickArea>;
};
