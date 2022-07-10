import { ProductCard } from "src/core/ProductCard/ProductCard"
import type { ProductsListProps } from "./ProductsList.types"

export const ProductsList = ({ status, productsList }: ProductsListProps) => {
  return <div>
    <h1>Products List</h1>
    <ProductCard boxId={productsList[0].boxId} productName={productsList[0].productName} quantity={productsList[0].quantity} />
    <ProductCard boxId={productsList[0].boxId} productName={productsList[0].productName} quantity={productsList[0].quantity} />
    <ProductCard boxId={productsList[0].boxId} productName={productsList[0].productName} quantity={productsList[0].quantity} />
    <ProductCard boxId={productsList[0].boxId} productName={productsList[0].productName} quantity={productsList[0].quantity} />
    <ProductCard boxId={productsList[0].boxId} productName={productsList[0].productName} quantity={productsList[0].quantity} />
  </div>
}