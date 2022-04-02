import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'blue', 'green'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: Boolean,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>テスト</Button>;
};
const log = () => {
  console.log('テスト');
};
export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  size: 'medium',
  disabled: false,
  onClick: log,
};

const doApply = () => {
  console.log('応募する');
};

const ApplyTemplate: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>応募する</Button>;
};

export const Apply = ApplyTemplate.bind({});
Apply.args = {
  color: 'blue',
  size: 'medium',
  disabled: false,
  onClick: doApply,
};

const doDelete = () => {
  console.log('削除する');
};

const DeleteTemplate: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>削除する</Button>;
};

export const Delete = DeleteTemplate.bind({});
Delete.args = {
  color: 'red',
  size: 'small',
  disabled: false,
  onClick: doDelete,
};
