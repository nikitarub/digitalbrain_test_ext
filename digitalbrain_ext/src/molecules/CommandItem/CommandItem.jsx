import React from 'react';
import PropTypes from 'prop-types';
import './commanditem.scss';

import { Logo } from '../../atoms/Logo/Logo';

import Bus from 'bus-graph';


export class CommandItem extends React.Component {

    pushNotification = () => {        
        Bus.emit( 
            {
                event: "pushNotification", 
                data: this.props.notification
            }
        );
    }
    
    render() {
        
        return (
            <div
                className="digitalbrain-command-item"
                onClick={this.pushNotification}
            >
                <div
                    className="digitalbrain-command-item-logo"
                >
                <Logo 
                src={this.props.logo}
                />
                </div>
                <div className="digitalbrain-command-item-text">
                    {this.props.name}
                </div>
            </div>
            
        )
    }
}


CommandItem.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.any,
    notification: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.oneOf(["success", "error", "info"]),
        logo: PropTypes.any

    })
};


CommandItem.defaultProps = {
};

