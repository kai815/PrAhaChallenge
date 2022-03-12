import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {String},
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = ((args) => {return (<Text size={args.size}>テスト</Text>)});
export const Default = Template.bind({});
Default.args = {
  size:"2"
}
