import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color:{
      control:'select',
      options:['red','blue','green']
    },
    size:{
      control:'select',
      options:['small','medium','large']
    },
    disabled:Boolean,
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} >テスト</Button>;
};
const log = () => {
  console.log("テスト")
}
export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  size: 'medium',
  disabled: false,
  onClick: log
};
