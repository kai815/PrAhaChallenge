import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '.';

export default {
  title: 'Atoms/Text',
  component: Text,

  argTypes: {
    size: { String },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text size={args.size}>テスト</Text>;
};
export const Default = Template.bind({});
Default.args = {
  size: 'base',
};
