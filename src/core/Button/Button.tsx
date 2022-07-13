import { Button as MButton } from "@mantine/core"

import type { ButtonProps } from "./Button.types"

export const Button = ({children, variant, type, color, disabled, size, loading, component, onClick}: ButtonProps) => {
  return <MButton component={component} variant={variant} size={size} type={type} color={color} disabled={disabled} loading={loading} onClick={onClick}>{children}</MButton>
}