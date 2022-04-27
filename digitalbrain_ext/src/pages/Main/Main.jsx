import React from 'react';
import ReactDOM from 'react-dom';

import "./main.scss";

import { CommandList } from '../../organisms/CommandList/CommandList';
import { NotificationList } from '../../organisms/NotificationList/NotificationList';

import logo from '../../logo.svg';
import { Search } from '../../molecules/Search/Search';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification_data: {
                "notification_0" : {
                    id: "notification_0",
                    title: "some 0",
                    text: "more 0"
                },
                "notification_1" : {
                    id: "notification_1",
                    title: "some 1",
                    text: "more 1"
                }
            },
            commands: [
                {
                    name: "Refund Stripe Transaction",
                    logo: logo,
                    notification: {
                        title: "Clicked on Refund Stripe Transaction",
                        text: "Stripe refund OK",
                        type: "success",
                        logo: logo
                    }
                },
                {
                    name: "Change shipping address",
                    logo: logo,
                    notification: {
                        title: "Clicked on Change shipping address",
                        text: "Shipping Adress has been changed",
                        type: "success",
                        logo: logo
                    }
                },
                {
                    name: "Refund Shopify",
                    logo: logo,
                    notification: {
                        title: "Clicked on Refund Shopify",
                        text: "Shopify refund OK",
                        type: "success",
                        logo: logo
                    }
                }
            ]
        };
    }

    componentWillMount = () => {
        this.setupNotificationArea();
    }


    setupNotificationArea = () => {
        if (document.getElementById("digitalbrain-notification-root") === null){
            const notification_area = document.createElement('div');
            notification_area.id = "digitalbrain-notification-root";
            document.body.appendChild(notification_area);
            ReactDOM.render(<NotificationList notification_data={this.state.notification_data} />, notification_area);
        }   
    }

    render () {
        
        return (

            <div className="main">
                <Search />
                <CommandList commands={this.state.commands}/>
            </div>
        )
    }
}


Main.propTypes = {
};


Main.defaultProps = {
};
