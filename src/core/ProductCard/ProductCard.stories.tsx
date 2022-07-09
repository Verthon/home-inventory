import * as React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';

import { ProductCard } from './ProductCard';
import { ProductCardProps } from './ProductCard.types';


export default {
  component: ProductCard,
  title: 'core/ProductCard',
} as ComponentMeta<typeof ProductCard>;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />

export const LoadingProductCard = Template.bind({});
LoadingProductCard.args = {
  boxId: 2,
  productName: 'Eko Farma Strawberry Jam',
  quantity: 1,
  loading: true,
};

export const Default = Template.bind({});
Default.args = {
  boxId: 2,
  productName: 'Eko Farma Strawberry Jam',
  quantity: 1
};