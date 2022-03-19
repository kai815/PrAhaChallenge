import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkButton from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {String},
    href: {String}
  },
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = ((args) => {return (<LinkButton {...args} />)});
export const Default = Template.bind({});
Default.args = {
  text:"テスト",
  href: "#",
}
