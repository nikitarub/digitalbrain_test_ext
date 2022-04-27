import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design_System/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  label: 'Дальше',
};
