import { Button as MButton } from "@mantine/core"

import type { ButtonProps } from "./Button.types"

export const Button = ({children, variant, type, color, disabled, size, loading}: ButtonProps) => {
  return <MButton variant={variant} size={size} type={type} color={color} disabled={disabled} loading={loading}>{children}</MButton>
}