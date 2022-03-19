import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageNation from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/PageNation',
  component: PageNation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    pageCount:{Number},
  },
} as ComponentMeta<typeof PageNation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageNation> = ((args) => {
  return (
    <div style={{background:"#6b7280",padding:'20px'}}>
      <PageNation {...args} />
    </div>
  )
});
export const Default = Template.bind({});
Default.args = {
  pageCount:3
}
