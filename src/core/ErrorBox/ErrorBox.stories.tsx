import * as React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';

import { ErrorBox } from './ErrorBox';
import { ErrorBoxProps } from './ErrorBox.types';


export default {
  component: ErrorBox,
  title: 'core/ErrorBox',
} as ComponentMeta<typeof ErrorBox>;

const Template: Story<ErrorBoxProps> = (args) => <ErrorBox {...args} />;
export const ErrorBoxDefault = Template.bind({});
ErrorBoxDefault.args = {
  refetchAction: () => null
};

export const ErrorBoxCustom = Template.bind({});
ErrorBoxCustom.args = {
  refetchAction: () => null,
  customMessageText: 'Custom Error message',
  customRefetchText: 'Custom refetch'
};