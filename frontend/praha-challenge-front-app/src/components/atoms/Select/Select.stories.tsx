import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '.';


export default {
  title: 'Atoms/Select',
  component: Select,
  
  argTypes: {
    options: {Array}
  },
} as ComponentMeta<typeof Select>;


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
