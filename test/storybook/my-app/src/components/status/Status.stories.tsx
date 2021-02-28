import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Status, StatusPropsInterFace } from './index';

export default {
  title: 'Example/Status',
  component: Status,
} as Meta;

const Template: Story<StatusPropsInterFace> = (args) => <Status {...args} />;

export const WinnerX = Template.bind({});
WinnerX.args = {
  winner:"X",
  xIsNext:false,
};

export const WinnerY = Template.bind({});
WinnerY.args = {
  winner:"Y",
  xIsNext:true,
};

export const WinnerNullNextX = Template.bind({});
WinnerNullNextX.args = {
  winner:null,
  xIsNext:true,
};
