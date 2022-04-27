/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";


class Main extends React.Component {
    loadingFunc = () => {
      console.log("Frame loaded");
    }

    render() {
        return (
            <>
              <Frame onLoad={this.loadingFunc} head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
                <FrameContextConsumer>
                {
                    ({document, window}) => {
                      return <App document={document} window={window} isExt={true}/> 
                    }
                  }
                  </FrameContextConsumer>
              </Frame>
            </>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";

function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}


waitForElm('.app_container').then((elm) => {
    console.log("___EXT: app_container found: ", elm);
    elm.appendChild(app);
    ReactDOM.render(<Main />, app);
    app.style.display = "none";
});


chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
