import * as React from 'react';
import Button, { ButtonProps } from './Button';

const Template = (args: ButtonProps) => <Button {...args} />;

export const All: any= Template.bind({});
All.args = {
  type: 'button',
  children: 'Button',
  iconAlign: 'left',
  icon: '',
  loading: false,
  expanded: false,
  disabled: false,
  size: 'regular',
  appearance: 'basic',
};

export default {
  title: 'Components/Button/All',
  component: Button,
};
