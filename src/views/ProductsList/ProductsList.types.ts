import type { QueryStatus } from "react-query"

export type DisplayProduct = {
  boxId: string
  productName: string
  quantity: string
  quantityStatus?: string
}

export type ProductsListProps = {
  status: QueryStatus
  productsList: DisplayProduct[]
}