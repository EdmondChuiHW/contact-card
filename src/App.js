import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { ResetButton } from './ResetButton';
import { useCount } from './common/hooks/useCount';
import { Servers } from './Server/Servers';

const App = () => {
  const [countL, incCountL, resetL] = useCount(-1);
  const [countR, incCountR, resetR] = useCount(-1);
  const resetCounts = () => resetL() || resetR();

  const isEven = (countL + countR) % 2 === 0;

  return (
    <div className="App">
      <Servers isEven={isEven} rotateRight={true}/>
      <div className='counter'><Counter count={countL} incCount={incCountL}/></div>
      <div className='counter'><Counter count={countR} incCount={incCountR}/></div>
      <div className='resetButton'><ResetButton onClick={resetCounts}/></div>
      <Servers isEven={!isEven}/>
    </div>
  );
};

export default App;
