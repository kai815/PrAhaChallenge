import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarText from '.';

export default {
  title: 'Molecules/AvatarText',
  component: AvatarText,

  argTypes: {
    avatar: { Object },
    text: { String },
  },
} as ComponentMeta<typeof AvatarText>;

const Template: ComponentStory<typeof AvatarText> = (args) => {
  return <AvatarText {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  avatar: {
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
    alt: 'avatar',
  },
  text: 'Alex John',
};
