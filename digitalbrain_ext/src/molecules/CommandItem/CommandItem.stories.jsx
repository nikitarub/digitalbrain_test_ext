import React from 'react';

import { CommandItem } from './CommandItem';
import logo from '../../logo.svg';

export default {
  title: 'Design_System/molecules/CommandItem',
  component: CommandItem,
};

const Template = (args) => <CommandItem {...args} />;

export const CommandItemStory = Template.bind({});
CommandItemStory.args = {
  name: "Refund Stripe Transaction",
  logo: logo,
  notification: {
      text: "Clicked on Refund Stripe Transaction",
      title: "Stripe refund OK",
      type: "success",
      logo: logo
  }
};
