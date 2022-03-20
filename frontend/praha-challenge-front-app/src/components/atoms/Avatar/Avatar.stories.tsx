import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '.';


export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  
  argTypes: {
    src: {String},
    alt: {String}
  },
} as ComponentMeta<typeof Avatar>;


const Template: ComponentStory<typeof Avatar> = ((args) => {return (<Avatar {...args} />)});
export const Default = Template.bind({});
Default.args = {
  src:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
  alt: "avatar",
}
