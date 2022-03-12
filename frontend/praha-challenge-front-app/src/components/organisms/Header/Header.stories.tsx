import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (() => {return (<Header >テスト</Header>)});
export const Default = Template.bind({});
