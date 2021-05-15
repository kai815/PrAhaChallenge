import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Game, GamePropsInterFace } from './index';

export default {
  title: 'Example/Game',
  component: Game,
} as Meta;

const Template: Story<GamePropsInterFace> = (args) => <Game {...args} />;

export const GameInitial = Template.bind({});
GameInitial.args = {
  history:[{squares:["","","","","","","","",""]}],
  stepNumber:0
};

export const GmaeAllTriangle = Template.bind({});
GmaeAllTriangle.args = {
  history:[{squares:["△","△","△","△","△","△","△","△","△"]}],
  stepNumber:0
};

export const GmaeDrawResult = Template.bind({});
GmaeDrawResult.args = {
  history:[
    {squares:["", "", "", "", "", "", "", "", ""]},
    {squares:["X", "", "", "", "", "", "", "", ""]},
    {squares:["X", "O", "", "", "", "", "", "", ""]},
    {squares:["X", "O", "", "X", "", "", "", "", ""]},
    {squares:["X", "O", "", "X", "", "", "O", "", ""]},
    {squares:["X", "O", "", "X", "", "", "O", "X", ""]},
    {squares:["X", "O", "", "X", "", "", "O", "X", "O"]},
    {squares:["X", "O", "", "X", "", "X", "O", "X", "O"]},
    {squares:["X", "O", "", "X", "O", "X", "O", "X", "O"]},
    {squares:["X", "O", "X", "X", "O", "X", "O", "X", "O"]},
  ],
  stepNumber:9
};
