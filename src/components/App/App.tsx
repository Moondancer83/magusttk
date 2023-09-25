import React, {useState} from 'react';
import darkLogo from './logo_dark.jpg';
import lightLogo from './logo_light.jpg';
import './App.css';
import {Sheet} from "../Sheet";

function App() {
  const [isStarted, setStarted] = useState(false);
  const start = () => {
    console.log("Start!")
    setStarted(true)
  }

  return (
    <div className="App md">
      {isStarted ? (<Sheet/>) : (<Header start={start} />)}
    </div>
  );
}

function Header(props: {start: () => void}) {
  return (
    <header className="App-header">
      <div className="App-header-dark">
        <img src={darkLogo} className="App-logo" alt="logo" />
        <br/>
        <a
          className="App-link"
          href="https://magustk.hu"
          target="_blank"
          rel="noopener noreferrer"
        >
          M.A.G.U.S. Tiltott Törvénykönyv
        </a>
      </div>
      <div className="App-header-light">
        <a
          className="App-link App-link-mirror"
          // href="https://magustk.hu"
          // target="_blank"
          // rel="noopener noreferrer"
          onClick={() => props.start()}
        >
          M.A.G.U.S. Tiltott Törvénykönyv
        </a><br/>
        <img src={lightLogo} className="App-logo" alt="logo" onClick={props.start}/>
      </div>
      <p></p>
    </header>
  );
}

export default App;
