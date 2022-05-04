import React from 'react';

import {CommandList} from './CommandList';

export default {
  title: 'Design_System/Organisms/CommandList',
  component: CommandList,
};

import logo from '../../logo.svg';

const Template = (args) => <CommandList {...args} />;

export const CommandListStory = Template.bind({});
CommandListStory.args = {
  commands: [
      {
          name: "Refund Stripe Transaction",
          logo: logo,
          notification: {
              text: "Clicked on Refund Stripe Transaction",
              title: "Stripe refund OK",
              type: "success",
              logo: logo
          }
      },
      {
          name: "Change shipping address",
          logo: logo,
          notification: {
              text: "Clicked on Change shipping address",
              title: "Shipping Adress has been changed",
              type: "success",
              logo: logo
          }
      },
      {
          name: "Refund Shopify",
          logo: logo,
          notification: {
              text: "Clicked on Refund Shopify",
              title: "Shopify refund OK",
              type: "success",
              logo: logo
          }
      }
  ]
};
