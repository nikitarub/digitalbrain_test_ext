import React from 'react';
import "./notificationlist.scss";

import { Notification } from '../../molecules/Notification/Notification';

import Bus from 'bus-graph';


export class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification_data: {
                // "notification_0" : {
                //     id: "notification_0",
                //     title: "Test stub some 0",
                //     text: "more 0"
                // },
                // "notification_1" : {
                //     id: "notification_1",
                //     title: "Test stub some 1",
                //     text: "more 1"
                // },
                // "notification_2" : {
                //     id: "notification_2",
                //     title: "Test stub some 2",
                //     text: "more 2"
                // },
            }
        };
                
    }

    componentDidMount = () => {
        Bus.on("pushNotification", this.pushNotificationCallback);
    }

    componentWillUnmount = () => {
        Bus.totalOff("pushNotification");
    }


    pushNotificationCallback = (data) => {
        this.pushNotification(data);
    }

    pushNotification = (data) => {
        
        let notification_data = this.state.notification_data;
        const id = "notification_" + Object.keys(notification_data).length;
        const new_data = {
            id: id,
            title: data.title,
            text: data.text,
            logo: data.logo
        }
        notification_data[id] = new_data;
        
        this.setState({...this.state,
            notification_data
        })
        
    }
    
    removeNotification = (id) => {
        let notification_data = this.state.notification_data;
        delete notification_data[id];
        this.setState({ ...this.state,
            notification_data: notification_data,
        })
    }

    render () {

        const notification_data = this.state.notification_data;        
        const array = Object.keys(notification_data)
            .map(function(key) {
                return notification_data[key];
            });

        return (

            <div className="digitalbrain-notification-list">
                {array.map((props_data) =>
                    <Notification {...props_data} key={"key_" + props_data.id} removeNotification={this.removeNotification}/>
                )}
            </div>
        )
    }
}


NotificationList.propTypes = {
};


NotificationList.defaultProps = {
};
