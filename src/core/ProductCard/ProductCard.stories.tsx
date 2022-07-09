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
  boxId: 'A1',
  productName: 'Eko Farma Strawberry Jam',
  quantity: 1,
  loading: true,
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  boxId: 'A1',
  productName: 'Eko Farma Strawberry Jam',
  quantity: 1
};

export const Default = Template.bind({});
Default.args = {
  boxId: 'A1',
  productName: 'Eko Farma Strawberry Jam',
  quantity: 2
};

export const WithQuantityStatus = Template.bind({});
WithQuantityStatus.args = {
  boxId: 'A1',
  productName: 'Eko Farma Strawberry Jam',
  quantityStatus: 'About to expire',
  quantity: 1
};