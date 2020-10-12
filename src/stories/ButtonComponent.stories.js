import React from 'react';
import { ButtonComponent } from '../component/Atoms/ButtonComponent'

export default {
  title: 'Atoms/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    text: { control: 'text' },
    size: { control: 'text' },
    onClick: { control: '' },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'text',
  size: 'small',
  onClick: '',
};
