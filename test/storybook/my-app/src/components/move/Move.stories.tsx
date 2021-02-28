import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Move, MovePropsInterFace } from './index';

export default {
  title: 'Example/Move',
  component: Move,
} as Meta;

const Template: Story<MovePropsInterFace> = (args) => <Move {...args} />;

export const MoveHistoryInitial = Template.bind({});
MoveHistoryInitial.args = {
  history:[{squares:["","","","","","","","",""]}],
};

export const MoveHistory3 = Template.bind({});
MoveHistory3.args = {
  history:[
    {squares:["","","","","","","","",""]},
    {squares:["","","","","","","","","X"]},
    {squares:["","","","","","","","O",""]},
  ],
};
