import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { ResetButton } from './ResetButton';
import { useCount } from './common/hooks/useCount';
import { PureServer } from './Server/PureServer';

const App = () => {
  const [countF, incCountF, resetF] = useCount(0);
  const [countS, incCountS, resetS] = useCount(0);

  const resetCounts = () => resetF() || resetS();

  return (
    <div className="App">
      <div className='servers'>
        <div className='server'><PureServer isServing={true} rotateRight={true}/></div>
        <div className='server'><PureServer isServing={true} rotateRight={true}/></div>
      </div>
      <div className='counter'><Counter count={countF} incCount={incCountF}/></div>
      <div className='counter'><Counter count={countS} incCount={incCountS}/></div>
      <div className='resetButton'><ResetButton onClick={resetCounts}/></div>
      <div className='servers'>
        <div className='server'><PureServer isServing={true}/></div>
        <div className='server'><PureServer isServing={true}/></div>
      </div>
    </div>
  );
};

export default App;
