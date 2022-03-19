import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    options: {Array}
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = ((args) => {return (<Select {...args} />)});
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
