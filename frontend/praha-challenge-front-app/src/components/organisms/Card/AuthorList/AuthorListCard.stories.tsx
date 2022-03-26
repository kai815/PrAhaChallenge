import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AuthorListCard from '.';

export default {
  title: 'organisms/Card/AuthorListCard',
  component: AuthorListCard,
  argTypes: {
    authors: { Array },
  },
} as ComponentMeta<typeof AuthorListCard>;

const Template: ComponentStory<typeof AuthorListCard> = (args) => <AuthorListCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  authors: [
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John',
      createdPostCount: 20,
      key: 1,
    },
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John2',
      createdPostCount: 30,
      key: 2,
    },
  ],
};
