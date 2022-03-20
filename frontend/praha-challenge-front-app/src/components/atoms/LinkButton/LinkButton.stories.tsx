import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkButton from '.';


export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
  
  argTypes: {
    text: {String},
    href: {String}
  },
} as ComponentMeta<typeof LinkButton>;


const Template: ComponentStory<typeof LinkButton> = ((args) => {return (<LinkButton {...args} />)});
export const Default = Template.bind({});
Default.args = {
  text:"テスト",
  href: "#",
}
