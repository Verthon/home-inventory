import * as React from 'react'
import { AppShell } from 'src/appshell/AppShell'
import { ProductsListContainer } from './ProductsList.container'

const ProductsListView = () => {
  return (
    <AppShell>
      <ProductsListContainer />
    </AppShell>
  )
}

export default ProductsListView