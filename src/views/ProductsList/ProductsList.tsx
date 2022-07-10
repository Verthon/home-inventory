import { EmptyStateBox } from "src/core/EmptyStateBox/EmptyStateBox"
import { ErrorBox } from "src/core/ErrorBox/ErrorBox"
import { ProductCard } from "src/core/ProductCard/ProductCard"

import type { ProductsListProps } from "./ProductsList.types"

export const ProductsList = ({ status, productsList, refetch, redirectToCreate }: ProductsListProps) => {
  const isEmptyList = status === 'success' && productsList.length === 0

  if(status === 'error') {
    return <ErrorBox refetchAction={refetch} />
  }

  if(isEmptyList) {
    return <EmptyStateBox redirectAction={redirectToCreate} />
  }

  return <div>
    <h1>Products List</h1>
    {productsList.map((product) => {
      return <ProductCard key={product.id} boxId={product.boxId} productName={product.productName} quantity={product.quantity} />
    })}
  </div>
}