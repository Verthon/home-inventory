import * as React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './Button.types';


export default {
  component: Button,
  title: 'core/Button',
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.children}</Button>;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: 'primary',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  children: 'Loading',
  loading: true,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small button',
  size: 'xs',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const DefaultDanger = Template.bind({});
DefaultDanger.args = {
  children: 'Danger',
  color: 'error',
  variant: 'outline',
};