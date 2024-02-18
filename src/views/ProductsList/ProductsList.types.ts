import type { QueryStatus } from "react-query"

export type DisplayProduct = {
  boxName: string
  productName: string
  quantity: string
  quantityStatus?: string
}

export type ProductsListItem = {
  id: number
} & DisplayProduct

export type ProductsListProps = {
  status: QueryStatus
  productsList: ProductsListItem[]
  refetch: () => void
  redirectToCreate: () => void
}