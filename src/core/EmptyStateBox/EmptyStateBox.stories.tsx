import * as React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';

import { EmptyStateBox } from './EmptyStateBox';
import { EmptyStateBoxProps } from './EmptyStateBox.types';


export default {
  component: EmptyStateBox,
  title: 'core/EmptyStateBox',
} as ComponentMeta<typeof EmptyStateBox>;

const Template: Story<EmptyStateBoxProps> = (args) => <EmptyStateBox {...args} />;
export const EmptyStateBoxDefault = Template.bind({});
EmptyStateBoxDefault.args = {
  redirectAction: () => null
};

export const EmptyStateBoxCustom = Template.bind({});
EmptyStateBoxCustom.args = {
  redirectAction: () => null,
  customMessageText: 'Custom Error message',
  customRefetchText: 'Custom refetch'
};