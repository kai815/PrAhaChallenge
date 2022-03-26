import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TwLpTemplate from '.';

export default {
  title: 'templates/TwLpTemplate',
  component: TwLpTemplate,
  argTypes: {
    options: { Array },
    posts: { Array },
    authors: { Array },
    categories: { Array },
    recentPost: { Object },
  },
} as ComponentMeta<typeof TwLpTemplate>;

const Template: ComponentStory<typeof TwLpTemplate> = (args) => <TwLpTemplate {...args} />;
export const Default = Template.bind({});
Default.args = {
  options: [
    {
      text: 'Latest',
      value: 'Latest',
      key: '1',
    },
    {
      text: 'Lastweek',
      value: 'Lastweek',
      key: '2',
    },
  ],
  posts: [
    {
      date: 'Jun 1, 2020',
      tag: {
        text: 'Laravel',
        href: '#',
      },
      title: 'Build Your New Idea with Laravel Freamwork.',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      user: {
        avatar: {
          src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
          alt: 'avatar',
        },
        name: 'Alex John',
      },
      key: 1,
    },
    {
      date: 'Jun 2, 2020',
      tag: {
        text: 'Larave2',
        href: '#',
      },
      title: 'Build Your New Idea with Laravel Freamwork.2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      user: {
        avatar: {
          src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
          alt: 'avatar2',
        },
        name: 'Alex John2',
      },
      key: 2,
    },
    {
      date: 'Jun 3, 2020',
      tag: {
        text: 'Larave3',
        href: '#',
      },
      title: 'Build Your New Idea with Laravel Freamwork.3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      user: {
        avatar: {
          src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
          alt: 'avatar3',
        },
        name: 'Alex John3',
      },
      key: 3,
    },
    {
      date: 'Jun 4, 2020',
      tag: {
        text: 'Larave4',
        href: '#',
      },
      title: 'Build Your New Idea with Laravel Freamwork.4',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      user: {
        avatar: {
          src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
          alt: 'avatar4',
        },
        name: 'Alex John4',
      },
      key: 4,
    },
    {
      date: 'Jun 5, 2020',
      tag: {
        text: 'Larave5',
        href: '#',
      },
      title: 'Build Your New Idea with Laravel Freamwork.5',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      user: {
        avatar: {
          src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
          alt: 'avatar5',
        },
        name: 'Alex John5',
      },
      key: 5,
    },
  ],
  authors: [
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John',
      createdPostCount: 10,
      key: 1,
    },
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John2',
      createdPostCount: 20,
      key: 2,
    },
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John3',
      createdPostCount: 30,
      key: 3,
    },
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John4',
      createdPostCount: 40,
      key: 4,
    },
    {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John5',
      createdPostCount: 50,
      key: 5,
    },
  ],
  categories: [
    {
      name: 'Vue',
      key: 1,
    },
    {
      name: 'Design',
      key: 2,
    },
    {
      name: 'AWS',
      key: 3,
    },
    {
      name: 'Django',
      key: 4,
    },
    {
      name: 'PHP',
      key: 5,
    },
    {
      name: 'Laravel',
      key: 6,
    },
  ],
  recentPost: {
    date: 'Jun 1, 2020',
    category: 'Laravel',
    title: 'Build Your New Idea with Laravel Freamwork.',
    author: {
      avatar: {
        src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
        alt: 'avatar',
      },
      name: 'Alex John',
    },
  },
};
