import React from 'react';

import {NotificationList} from './NotificationList';

export default {
  title: 'Design_System/Organisms/NotificationList',
  component: NotificationList,
};

const Template = (args) => <NotificationList {...args} />;

export const NotificationListStory = Template.bind({});
NotificationListStory.args = {
  id: "test_id",
  title: "Sample",
  text: "Some description"
};
