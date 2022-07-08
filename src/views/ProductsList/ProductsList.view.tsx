import * as React from 'react'
import { AppShell } from 'src/appshell/AppShell'
import { ProductsListContainer } from './ProductsList.container'

export const ProductsListView = () => {
  return (
    <AppShell>
      <ProductsListContainer />
    </AppShell>
  )
}