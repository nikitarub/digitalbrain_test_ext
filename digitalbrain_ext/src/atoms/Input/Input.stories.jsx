import React from 'react';

import { Input } from './Input';

export default {
  title: 'Design_System/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
  placeholder: 'Placeholder',
};
