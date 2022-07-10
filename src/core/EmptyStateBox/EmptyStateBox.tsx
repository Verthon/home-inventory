import { Button } from "../Button/Button"

import type { EmptyStateBoxProps } from "./EmptyStateBox.types"
import styles from './EmptyStateBox.module.css'

export const EmptyStateBox = ({ redirectAction, customMessageText, customRefetchText }: EmptyStateBoxProps) => {
  return <div className={styles.wrapper}>
    <h2 className={styles.header}>{customMessageText || 'No products yet.'}</h2>
    <Button component='button' onClick={redirectAction}>{customRefetchText || 'Create'}</Button>
  </div>
}