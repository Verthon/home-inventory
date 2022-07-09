import { Skeleton } from "../Skeleton/Skeleton"

import type { ProductCardProps } from "./ProductCard.types"
import styles from './ProductCard.module.css'

export const ProductCard = ({ boxId, productName, quantity, loading }: ProductCardProps) => {
  if (loading) {
    return <Skeleton />
  }

  return <div className={styles.wrapper}>
    <p>{productName}</p>
  </div>
}