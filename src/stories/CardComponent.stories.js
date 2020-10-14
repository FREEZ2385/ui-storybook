import React from 'react';
import { CardComponent } from '../component/Atoms/CardComponent'

export default {
  title: 'Atoms/CardComponent',
  component: CardComponent,
  argTypes: {
    title : { control: 'text' },
    date: { control: 'text' },
    content: { control: 'text' },
    image: { control: '' },
  },
};

const Template = (args) => <CardComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title : 'Example Title',
  date: '2020-10-10',
  content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,',
  image: '',
};
