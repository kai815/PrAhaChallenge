import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Board, BoardPropsInterface } from './index';

export default {
  title: 'Example/Board',
  component: Board,
} as Meta;

const Template: Story<BoardPropsInterface> = (args) => <Board {...args} />;

export const DisplayAllO = Template.bind({});
DisplayAllO.args = {
  squares: ["O","O","O","O","O","O","O","O","O"],
  onClick: ()=>{}
};

export const DisplayAllX = Template.bind({});
DisplayAllX.args = {
  squares: ["X","X","X","X","X","X","X","X","X"],
  onClick: ()=>{}
};

export const DisplayAllTriangle = Template.bind({});
DisplayAllTriangle.args = {
  squares: ["△","△","△","△","△","△","△","△","△"],
  onClick: ()=>{}
};
