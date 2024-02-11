import type { ButtonProps as MButtonProps } from '@mantine/core'

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: HTMLButtonElement['type']
} & MButtonProps
