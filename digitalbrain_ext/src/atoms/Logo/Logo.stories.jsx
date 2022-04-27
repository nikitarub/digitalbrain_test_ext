import React from 'react';

import { Logo } from './Logo';

import logo from "../../logo.svg";

export default {
  title: 'Design_System/Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const LogoStory = Template.bind({});
LogoStory.args = {
  src: logo
};
