import React from 'react';

import Dummy from './Placeholder';
import { Placeholder } from './Placeholder';

export default {
  title: 'Design_System/Atoms/Placeholder',
  component: Placeholder,
};

const Template = (args) => <Placeholder {...args} />;

export const PlaceholderStory = Template.bind({});
PlaceholderStory.args = {
};
