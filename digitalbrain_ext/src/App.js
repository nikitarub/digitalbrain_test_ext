/*global chrome*/
import React, { Component } from 'react';

import Main from './pages/Main/Main';
import {MainPlaceholder} from './pages/Main/MainPlaceholder';

import './App.scss';

class App extends Component {

  render() {

    return (
      <>
        <MainPlaceholder />
        <div id="App" className="App" hidden="true">
          <Main isExt={this.props.isExt}/>
        </div>
      </>
      
    );
  }
}

export default App;
