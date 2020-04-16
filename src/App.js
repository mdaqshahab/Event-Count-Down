import React from 'react';
import './App.css';
import Countdown from './Countdown';
import './Style.css';
import Block from './Block';
import './Block.css'

function App() {
  return (
    <div className="appdiv">
        <h1 className="app_h1" >The Birthday Girl</h1>
        <br></br>
        <br></br>
        <Block />
        <Countdown timeTillDate="04 20 2020, 06:30 p" timeFormat="MM DD YYYY, hh:mm a" />
    </div>
  );
}

export default App;
