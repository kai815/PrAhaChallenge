import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';


export default {
  title: 'organisms/Header',
  component: Header,
  
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (() => {return (<Header />)});
export const Default = Template.bind({});
