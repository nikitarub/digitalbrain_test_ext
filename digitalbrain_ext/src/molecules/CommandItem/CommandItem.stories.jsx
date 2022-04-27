import React from 'react';

import { CommandItem } from './CommandItem';
import logo from '../../logo.svg';
import shopify_logo from '../../assets/images/shopify_logo.svg';


export default {
  title: 'Design_System/molecules/CommandItem',
  component: CommandItem,
};

const Template = (args) => <CommandItem {...args} />;

export const CommandItemStory = Template.bind({});
CommandItemStory.args = {
  name: "Refund Stripe Transaction",
  logo: shopify_logo,
  notification: {
      text: "Clicked on Refund Stripe Transaction",
      title: "Stripe refund OK",
      type: "success",
      logo: shopify_logo
  }
};
