import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Desc, DescPropsInterFace } from './Desc';

export default {
  title: 'Example/Move',
  component: Desc,
} as Meta;

const Template: Story<DescPropsInterFace> = (args) => <Desc {...args} />;

export const DescInitial = Template.bind({});
DescInitial.args = {
  move:0,
};

export const Desc4 = Template.bind({});
Desc4.args = {
  move:4,
};
