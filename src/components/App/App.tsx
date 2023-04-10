import React from 'react';
import darkLogo from './logo_dark.jpg';
import lightLogo from './logo_light.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
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
            href="https://magustk.hu"
            target="_blank"
            rel="noopener noreferrer"
          >
            M.A.G.U.S. Tiltott Törvénykönyv
          </a><br/>
          <img src={lightLogo} className="App-logo" alt="logo" />
        </div>
        <p></p>
      </header>
    </div>
  );
}

export default App;
