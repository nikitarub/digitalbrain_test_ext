/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';

import "./main.scss";

import { CommandList } from '../../organisms/CommandList/CommandList';
import { NotificationList } from '../../organisms/NotificationList/NotificationList';

import shopify_logo from '../../assets/images/shopify_logo.svg';
import stripe_logo from '../../assets/images/stripe_logo.svg';
import address_icon from '../../assets/images/address_icon.svg';


import { Search } from '../../molecules/Search/Search';



export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commands: [
                {
                    name: "Refund Stripe Transaction",
                    logo: this.props.isExt ? chrome.runtime.getURL("static/media/stripe_logo.svg") : stripe_logo,
                    notification: {
                        title: "Clicked on Refund Stripe Transaction",
                        text: "Stripe refund OK",
                        type: "success",
                        logo: this.props.isExt ? chrome.runtime.getURL("static/media/stripe_logo.svg") : stripe_logo,
                    }
                },
                {
                    name: "Change shipping address",
                    logo: this.props.isExt ? chrome.runtime.getURL("static/media/address_icon.svg") : address_icon,
                    notification: {
                        title: "Clicked on Change shipping address",
                        text: "Shipping Adress has been changed",
                        type: "success",
                        logo: this.props.isExt ? chrome.runtime.getURL("static/media/address_icon.svg") : address_icon,
                    }
                },
                {
                    name: "Refund Shopify",
                    logo: this.props.isExt ? chrome.runtime.getURL("static/media/shopify_logo.svg") : shopify_logo,
                    notification: {
                        title: "Clicked on Refund Shopify",
                        text: "Shopify refund OK",
                        type: "success",
                        logo: this.props.isExt ? chrome.runtime.getURL("static/media/shopify_logo.svg") : shopify_logo,
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
            <>
                <h2 className="App-header">
                    DigitalBrain Test Extension
                </h2>
                <div className="main">
                    <Search />
                    <CommandList commands={this.state.commands}/>
                </div>
            </>
            
        )
    }
}


Main.propTypes = {
};


Main.defaultProps = {
};
