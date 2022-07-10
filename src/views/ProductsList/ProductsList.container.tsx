import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'src/core/Skeleton/Skeleton'

import { ProductsList } from './ProductsList'
import { useFetchProducts } from './useFetchProducts'

export const ProductsListContainer = () => {
  const navigate = useNavigate();
  const { status, productsList, refetch } = useFetchProducts()
  const redirectToCreatePage = () => navigate('/create')

  if(status === 'loading') {
    return <Skeleton><ProductsList status={status} productsList={productsList} refetch={refetch} redirectToCreate={redirectToCreatePage} /></Skeleton>
  }

  return <ProductsList status={status} productsList={productsList} refetch={refetch} redirectToCreate={redirectToCreatePage} />
}