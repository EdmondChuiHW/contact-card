import { useState } from 'react';

export const useCount = initCount => {
  const [count, setCount] = useState(initCount);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return [count, increment, reset];
};
