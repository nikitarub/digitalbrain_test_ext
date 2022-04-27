import React from 'react';
import PropTypes from 'prop-types';
import "./notification.scss";

import { Button } from '../../atoms/Button/Button';
import { Logo } from '../../atoms/Logo/Logo';


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
            label: "",
            onClick: this.removeNotificationWrapper
        }
        return (
            <div className="digitalbrain-notification" id={this.props.id}>
                <div className="digitalbrain-notification-header">
                    <div className="digitalbrain-notification-header-title-logo">
                        <div className="digitalbrain-notification-header-title-logo--logo">
                            <Logo 
                                src={this.props.logo}
                            />
                        </div>
                        
                        
                        {this.props.title}
                    </div>
                    
                    <Button className="close-button" {...button_props}/>
                </div>
                <div className="digitalbrain-notification-body">
                    {this.props.text}
                </div>
                
                
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
