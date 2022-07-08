import { Button as MButton } from "@mantine/core"

import type { ButtonProps } from "./Button.types"

export const Button = ({children, variant, type}: ButtonProps) => {
  return <MButton variant={variant} type={type}>{children}</MButton>
}