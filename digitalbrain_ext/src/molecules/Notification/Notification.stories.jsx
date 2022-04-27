import React from 'react';

import { Notification } from './Notification';

export default {
  title: 'Design_System/Molecules/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const NotificationStory = Template.bind({});
NotificationStory.args = {
  id: "test_id_0",
  numeric_id: 0,
  title: "Sample",
  text: "Some description"
};
