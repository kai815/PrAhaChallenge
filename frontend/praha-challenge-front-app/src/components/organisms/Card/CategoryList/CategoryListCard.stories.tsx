import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryListCard from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/Card/CategoryListCard',
  component: CategoryListCard,
  argTypes: {
    categories: {Array}
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CategoryListCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoryListCard> = ((args) => (<CategoryListCard {...args}/>));
export const Default = Template.bind({});
Default.args = {
  categories:[
    {
      name:'Vue,js',
      key:1
    },
    {
      name:'Design',
      key:2
    },
  ]
}
