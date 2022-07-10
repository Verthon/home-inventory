import * as React from 'react'
import { Skeleton } from 'src/core/Skeleton/Skeleton'

import { ProductsList } from './ProductsList'
import { useFetchProducts } from './useFetchProducts'

export const ProductsListContainer = () => {
  const { status, productsList } = useFetchProducts()

  if(status === 'loading') {
    return <Skeleton />
  }

  return <ProductsList status={status} productsList={productsList} />
}