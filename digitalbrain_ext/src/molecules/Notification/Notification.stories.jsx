import React from 'react';

import { Notification } from './Notification';

import logo from '../../logo.svg';

export default {
  title: 'Design_System/Molecules/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const NotificationStory = Template.bind({});
NotificationStory.args = {
  id: "test_id_0",
  title: "Sample",
  text: "Some description",
  logo: logo
};
