import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Square, SquarePropsInterface } from './index';

export default {
  title: 'Example/Sqaure',
  component: Square,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<SquarePropsInterface> = (args) => <Square {...args} />;

export const DisplayO = Template.bind({});
DisplayO.args = {
  value: "O",
  indexNumber:0
};

export const DisplayX = Template.bind({});
DisplayX.args = {
  value: "X",
  indexNumber:0
};

export const DisplayTriangle = Template.bind({});
DisplayTriangle.args = {
  value: "△",
  indexNumber:0
};
