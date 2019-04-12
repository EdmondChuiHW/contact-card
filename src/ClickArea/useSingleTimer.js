import { useEffect } from 'react';

export const useSingleTimer = (fn, timeout, deps) => {
  useEffect(() => {
    const timerId = setTimeout(fn, timeout);
    return () => clearTimeout(timerId);
  }, deps);
};
