import { PasswordInput as MPasswordInputField } from "@mantine/core"

import type { PasswordInputFieldProps } from "./PasswordInputField.types"

export const PasswordInputField = ({...props}: PasswordInputFieldProps) => {
  return <MPasswordInputField {...props} />
}