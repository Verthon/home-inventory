import * as React from 'react'
import { Skeleton } from 'src/core/Skeleton/Skeleton'

import { ProductsList } from './ProductsList'
import { useFetchProducts } from './useFetchProducts'

export const ProductsListContainer = () => {
  const { data, status } = useFetchProducts()

  if(status === 'loading') {
    return <Skeleton />
  }

  return <ProductsList />
}