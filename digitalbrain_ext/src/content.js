/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";


class Main extends React.Component {
    CSSDone = () => {
      const my_ext_iframe = document.getElementById("my-ext-iframe");
      let head_element = my_ext_iframe.contentWindow.document.getElementsByTagName("head")[0]
      
      my_ext_iframe.contentWindow.document.getElementById("MainPlaceholder").hidden = true;
      my_ext_iframe.contentWindow.document.getElementById("App").hidden = false;
    }

    loadingFunc = () => {
      const my_ext_iframe = document.getElementById("my-ext-iframe");
      let content_css_link_element = my_ext_iframe.contentWindow.document.getElementById("content_css_link")
      if (content_css_link_element !== null){
        return
      }

      let head_element = my_ext_iframe.contentWindow.document.getElementsByTagName("head")[0]
      let link = document.createElement('link');
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.id = "content_css_link"
      link.onload = this.CSSDone;
      const url = chrome.runtime.getURL("/static/css/content.css");
      
      link.setAttribute("href", url);
      head_element.appendChild(link);
      
    }

    render() {
        return (
            <>
              
              <Frame id="my-ext-iframe" onLoad={this.loadingFunc}
              > 
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
    // app.style.display = "none";
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
