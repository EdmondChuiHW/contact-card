import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { ResetButton } from './ResetButton';
import { useCount } from './common/hooks/useCount';
import { PureServer } from './Server/PureServer';

const isLeftServing = ({ startedLeft, totalCount }) => {
  return startedLeft && (Math.floor(totalCount / 5) % 2 === 0);
};

const App = () => {
  const [countL, incCountL, resetL] = useCount(0);
  const [countR, incCountR, resetR] = useCount(0);
  const resetCounts = () => resetL() || resetR();
  const startedLeft = true;

  const totalCount = (countL + countR);

  const leftServing = isLeftServing({ startedLeft, totalCount });

  return (
    <div className="App">
      <div className='server'><PureServer isServing={leftServing} rotateRight={true}/></div>
      <div className='counter'><Counter count={countL} incCount={incCountL}/></div>
      <div className='counter'><Counter count={countR} incCount={incCountR}/></div>
      <div className='resetButton'><ResetButton onClick={resetCounts}/></div>
      <div className='server'><PureServer isServing={!leftServing}/></div>
    </div>
  );
};

export default App;
