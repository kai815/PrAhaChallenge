import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardOutLine from '.';


export default {
  title: 'Atoms/CardOutLine',
  component: CardOutLine,
  argTypes:{
    paddingXSize:{
      control: { type: 'select' },
      options:['s','m','l']
    },
    paddingYSize:{
      control: { type: 'select' },
      options:['s','m','l']
    },
    maxWidth:{
      control: { type: 'select' },
      options:['s','m']
    }
  }
} as ComponentMeta<typeof CardOutLine>;


const Template: ComponentStory<typeof CardOutLine> = ((args) => {return (<CardOutLine {...args} >テスト<br/>テスト</CardOutLine>)});
export const Default = Template.bind({
  paddingXSize:'s',
  paddingYSize:'s',
  maxWidth:'s',
});
