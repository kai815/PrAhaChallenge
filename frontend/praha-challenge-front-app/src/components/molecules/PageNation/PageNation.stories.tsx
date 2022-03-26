import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageNation from '.';

export default {
  title: 'Molecules/PageNation',
  component: PageNation,

  argTypes: {
    pageCount: { Number },
  },
} as ComponentMeta<typeof PageNation>;

const Template: ComponentStory<typeof PageNation> = (args) => {
  return (
    <div style={{ background: '#9ca3af', padding: '20px' }}>
      <PageNation {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  pageCount: 3,
};
