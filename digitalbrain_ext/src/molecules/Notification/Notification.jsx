import React from 'react';
import PropTypes from 'prop-types';
import "./notification.scss";

import { Button } from '../../atoms/Button/Button';


export class Notification extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    componentDidMount = () => {
        // this.terminateByTimer();
    }

    terminateByTimer = () => {
        let timer_id = setTimeout(
            () => {
                this.props.removeNotification(this.props.id);
            }, 
            3000);
        
        this.setState({...this.state,
            timer_id: timer_id
        })
    }

    removeNotificationWrapper = () => {
        if (this.props.removeNotification !== undefined) {
            if (this.state.timer_id !== undefined) {
                clearTimeout(this.state.timer_id);
            }
            this.props.removeNotification(this.props.id);
        }
    }

    render () {
        const button_props = {
            label: "Закрыть",
            onClick: this.removeNotificationWrapper
        }
        return (
            <div className="digitalbrain-notification" id={this.props.id}>
                <h1>
                    {this.props.title}
                </h1>
                <p>
                    {this.props.text}
                </p>
                <Button {...button_props}/>
            </div>
        )
    }
}


Notification.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    removeNotification: PropTypes.func
};


Notification.defaultProps = {
};
