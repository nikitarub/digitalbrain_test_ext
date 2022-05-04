import React from 'react';
import './placeholder.scss';


export class Placeholder extends React.Component {

    componentDidMount = () => {
        console.log("Placeholder Mounted");
        
    }

    onLoadFunc = () => {
        console.log("Placeholder Loaded");
    }
    
    
    render() {        
        return (
            <div
            className="digitalbrain-placeholder"
            onLoad={this.onLoadFunc}
            >
                Placeholder
            </div>
        )
    }
}

Placeholder.propTypes = {

};


Placeholder.defaultProps = {
};

