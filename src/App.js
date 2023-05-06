import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [para, setPara] = useState(false);
  const [allow, setAllow] = useState(false);

  console.log('App');

  const toggleHandler = useCallback(() => {
    if (allow) {
      setPara((prevPara) => !prevPara);
    }
  }, [allow]);

  const allowHandler = () => {
    setAllow(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={para} />
      <Button onClick={allowHandler}>Allow toggling</Button>
      <Button onClick={toggleHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
