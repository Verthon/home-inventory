import { Button } from "../Button/Button"

import type { ErrorBoxProps } from "./ErrorBox.types"
import styles from './ErrorBox.module.css'

export const ErrorBox = ({ refetchAction, customRefetchText, customMessageText }: ErrorBoxProps) => {
  return <div className={styles.wrapper}>
    <h2 className={styles.header}>{customMessageText || 'Sorry, something went wrong.'}</h2>
    <Button component='button' onClick={refetchAction}>{customRefetchText || 'Refetch'}</Button>
  </div>
}