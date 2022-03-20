import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TwLpTemplate from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'templates/TwLpTemplate',
  component: TwLpTemplate,
  argTypes: {
    options: {Array}
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TwLpTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwLpTemplate> = ((args) => (<TwLpTemplate {...args}/>));
export const Default = Template.bind({});
Default.args = {
  options:[
    {
      text:"Latest",
      value: "Latest",
      key:'1'
    },
    {
      text:"Lastweek",
      value: "Lastweek",
      key:'2'
    },
  ]
}
