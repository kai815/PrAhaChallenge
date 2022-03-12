import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {String},
  },
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = ((args) => {return (<Tag text={args.text} />)});
export const Default = Template.bind({});
Default.args = {
  text:"base"
}
