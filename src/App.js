import React from 'react';
import './App.css';
import { Counter } from './Counter';

const App = () => (
  <div className="App">
    <div style={{ flex: 1, display: 'flex' }}><Counter/></div>
    <div style={{ flex: 1, display: 'flex' }}><Counter/></div>
  </div>
);

export default App;
