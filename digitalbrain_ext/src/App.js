/*global chrome*/
import React, { Component } from 'react';

import Main from './pages/Main/Main';
import './App.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h2 className="App-header">
          DigitalBrain Test Extension
        </h2>
        <Main />
      </div>
    );
  }
}

export default App;
