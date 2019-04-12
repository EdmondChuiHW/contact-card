import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { ResetButton } from './ResetButton';
import { useCount } from './common/hooks/useCount';

const App = () => {
  const [countF, incCountF, resetF] = useCount(0);
  const [countS, incCountS, resetS] = useCount(0);

  const resetCounts = () => resetF() || resetS();

  return (
    <div className="App">
      <div className='counter'><Counter count={countF} incCount={incCountF}/></div>
      <div className='counter'><Counter count={countS} incCount={incCountS}/></div>
      <div className='resetButton'><ResetButton onClick={resetCounts}/></div>
    </div>
  );
};

export default App;
