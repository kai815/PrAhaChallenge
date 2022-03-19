import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostCard from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/Card/PostCard',
  component: PostCard,
  argTypes: {
    date: {String},
    tag:{Object},
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostCard> = ((args) => (<PostCard {...args}/>));
export const Default = Template.bind({});
Default.args = {
  date:'Jun 1, 2020',
  tag:{
    text:"Laravel",
    href:"#"
  }
}
