import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryListCard from '.';


export default {
  title: 'organisms/Card/CategoryListCard',
  component: CategoryListCard,
  argTypes: {
    categories: {Array}
  },
  
} as ComponentMeta<typeof CategoryListCard>;


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
