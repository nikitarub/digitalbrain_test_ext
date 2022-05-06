import React from 'react';

import { Placeholder } from './Placeholder';

export default {
  title: 'Design_System/Atoms/Placeholder',
  component: Placeholder,
};

const Template = (args) => <Placeholder {...args} />;

export const PlaceholderDefault = Template.bind({});
PlaceholderDefault.args = {
  width: "60px",
  height: "20px",
  rounded: true
};

export const PlaceholderMargin = Template.bind({});
PlaceholderMargin.args = {
  width: "60px",
  height: "20px",
  rounded: true,
  margin: "20px 0 0 20px"
};
