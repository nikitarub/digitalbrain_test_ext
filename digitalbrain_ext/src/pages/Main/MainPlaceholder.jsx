/*global chrome*/
import React from 'react';

import { Placeholder } from '../../atoms/Placeholder/Placeholder';


export const MainPlaceholder = () => {

    const main_placeholder_style = {
        backgroundColor: "#FFF",
        paddingTop: "5px",
        paddingBottom: "10px"
    }

    const header_props = {
      width: "300px",
      height: "30px",
      margin: "22px 20px 20px 20px"
    }
  
    const search_props = {
      width: "100%",
      height: "52px",
      margin: "0 0 0 0",
      rounded: false
    }
    
    const item_props = {
      width: "250px",
      height: "30px",
      margin: "10px 10px 20px 12px"
    }
    
    return (
      <div id="MainPlaceholder" style={main_placeholder_style}>
        <Placeholder {...header_props}/>
        <Placeholder {...search_props}/>

        <Placeholder {...item_props}/>
        <Placeholder {...item_props}/>
        <Placeholder {...item_props}/>
        
      </div>
    )
  }
  
