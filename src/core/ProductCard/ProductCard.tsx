import { Skeleton } from "../Skeleton/Skeleton";
import { Avatar } from "../Avatar/Avatar";

import type { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";

export const ProductCard = ({
  boxId,
  productName,
  quantity,
  loading,
  quantityStatus,
}: ProductCardProps) => {
  const itemsLabel = quantity === 1 ? 'one item' : `${quantity} items`

  if (loading) {
    return <Skeleton animate />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.statusColorDotWrapper}>
        <span className={styles.statusColorDot}></span>
      </div>
      <Avatar className={styles.avatar} size="sm">AV</Avatar>
      <div className={styles.productNameWrapper}>
        <p className={styles.productName}>
          <span className={styles.productBoxName}>{boxId}</span> {productName}
        </p>
        <p className={styles.quantityStatus}>{quantityStatus}</p>
      </div>
      <p className={styles.quantity}>{itemsLabel}</p>
    </div>
  );
};
