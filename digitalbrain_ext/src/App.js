/*global chrome*/

import ReactDOM from 'react-dom';

import React, { Component } from 'react';
// import logo from './logo.svg';
import {Notification} from './molecules/Notification/Notification';
import {Placeholder} from './atoms/Placeholder/Placeholder';
import {Search} from './molecules/Search/Search';

import Main from './pages/Main/Main';
import './App.scss';




class App extends Component {

  showPopup = () => {
    alert('works')

    const notification = document.createElement('div');
    // notification.className = "digitalbrain-notification";
    document.body.appendChild(notification);
    ReactDOM.render(<Notification />, notification);
  }

  render() {
    // import Main from './pages/Main/Main';
    // const MainLazy = React.lazy(() => import('./pages/Main/Main'));
        
    // return (
        // <React.Suspense fallback={<Placeholder />}>
        //         <MainLazy />
        // </React.Suspense>
    // )
    return (
      <div className="App">
        {/* <header className="App-header">
          {this.props.isExt ? 
            <img src={chrome.runtime.getURL("static/media/logo.svg")} className="App-logo" alt="logo" />
          :
            <img src={logo} className="App-logo" alt="logo" />
          }

          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <React.Suspense fallback={<Placeholder />}>
                <MainLazy />
        </React.Suspense> */}
        <Main />
      </div>
    );
  }
}

export default App;
