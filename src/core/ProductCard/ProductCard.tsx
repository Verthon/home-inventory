import { Skeleton } from "../Skeleton/Skeleton";
import { Avatar } from "../Avatar/Avatar";

import type { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";

const Content = ({
  boxId,
  productName,
  quantity,
  quantityStatus,
}: ProductCardProps) => {
  const itemsLabel = quantity === '1' ? 'one item' : `${quantity} items`
  return (
    <div className={styles.wrapper} role='listitem'>
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
}

export const ProductCard = ({
  boxId,
  productName,
  quantity,
  loading,
  quantityStatus,
}: ProductCardProps) => {

  if (loading) {
    return <Skeleton animate>
      <Content boxId={boxId} productName={productName} quantity={quantity} quantityStatus={quantityStatus} />
    </Skeleton>;
  }

  return (
    <Content boxId={boxId} productName={productName} quantity={quantity} quantityStatus={quantityStatus} />
  );
};
