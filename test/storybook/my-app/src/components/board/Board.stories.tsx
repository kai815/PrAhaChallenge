import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Board, BoardPropsInterface } from './index';

export default {
  title: 'Example/Board',
  component: Board,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<BoardPropsInterface> = (args) => <Board {...args} />;

export const DisplayAllO = Template.bind({});
DisplayAllO.args = {
  squares: ["O","O","O","O","O","O","O","O","O"],
};

export const DisplayAllX = Template.bind({});
DisplayAllX.args = {
  squares: ["X","X","X","X","X","X","X","X","X"],
};

export const DisplayAllTriangle = Template.bind({});
DisplayAllTriangle.args = {
  squares: ["△","△","△","△","△","△","△","△","△"],
};
