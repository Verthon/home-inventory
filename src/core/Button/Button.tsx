import { Button as MButton } from '@mantine/core'

import type { ButtonProps } from './Button.types'

export const Button = ({
  children,
  type = 'button',
  variant,
  color,
  disabled,
  size,
  loading,
  onClick,
}: ButtonProps) => {
  return (
    <MButton
      variant={variant}
      type={type}
      size={size}
      color={color}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    >
      {children}
    </MButton>
  )
}
