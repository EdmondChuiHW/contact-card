import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { ResetButton } from './ResetButton';
import { useCount } from './common/hooks/useCount';
import { PureServer } from './Server/PureServer';
import { StartLeftOrRight } from './StartLeftOrRight';

const isLeftServing = ({ startedLeft, totalCount }) => {
  const isStartingSide = (Math.floor(totalCount / 5) % 2 === 0);
  return startedLeft ? isStartingSide : !isStartingSide;
};

const App = () => {
  const [countL, incCountL, resetL] = useCount(0);
  const [countR, incCountR, resetR] = useCount(0);
  const [startedLeft, setStartedLeft] = useState(undefined);
  const resetGame = () => resetL() || resetR() || setStartedLeft(undefined);

  const totalCount = (countL + countR);

  const leftServing = isLeftServing({ startedLeft, totalCount });

  if (startedLeft === undefined) {
    return <StartLeftOrRight setStartedLeft={setStartedLeft}/>;
  }
  return (
    <div className="App">
      <div className='server'>
        <PureServer isServing={leftServing} rotateRight={true}/>
      </div>
      <div className='counter left'>
        <Counter count={countL} incCount={incCountL}/>
      </div>
      <div className='counter'>
        <Counter count={countR} incCount={incCountR}/>
      </div>
      <div className='resetButton'>
        <ResetButton onClick={resetGame}/>
      </div>
      <div className='server'>
        <PureServer isServing={!leftServing}/>
      </div>
    </div>
  );
};

export default App;
