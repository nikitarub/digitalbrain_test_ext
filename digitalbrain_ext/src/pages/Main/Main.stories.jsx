import React from 'react';

import Main from './Main';

import {MainPlaceholder} from './MainPlaceholder';


export default {
  title: 'Design_System/Pages/Main',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const MainStory = Template.bind({});
MainStory.args = {
  id: "test_id",
  title: "Sample",
  text: "Some description"
};



const TemplatePlaceholder = (args) => <MainPlaceholder {...args} />;

export const MainPlaceholderStory = TemplatePlaceholder.bind({});