import React from 'react';
import PropTypes from 'prop-types';
import './commanditem.scss';

import { Button } from '../../atoms/Button/Button';

import Bus from 'bus-graph';

export class CommandItem extends React.Component {

    pushNotification = () => {        
        const data = {
            title: this.props.notification.title,
            text: this.props.notification.text
        }
        Bus.emit( 
            {
                event: "pushNotification", 
                data: data
            }
        );
    }
    
    render() {
        
        return (
            <Button 
            onClick={this.pushNotification}
            label={this.props.name}
            />
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

