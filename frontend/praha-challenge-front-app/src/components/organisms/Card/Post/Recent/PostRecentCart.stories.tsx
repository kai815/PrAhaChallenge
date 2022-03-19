import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostRecentCard from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/Card/PostRecentCard',
  component: PostRecentCard,
  argTypes: {
    title: String,
    date: String,
    category: String,
    author:Object
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PostRecentCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostRecentCard> = ((args) => (<PostRecentCard {...args}/>));
export const Default = Template.bind({});
Default.args = {
  date:'Jun 1, 2020',
  category:"Laravel",
  title:"Build Your New Idea with Laravel Freamwork.",
  author:{
    avatar:{
      src:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
      alt: "avatar"
    },
    name:"Alex John"
  }
}
