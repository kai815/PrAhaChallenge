import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IndexPage  from './../pages/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IndexPage',
  component: IndexPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IndexPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage />;

export const Default = Template.bind({});
