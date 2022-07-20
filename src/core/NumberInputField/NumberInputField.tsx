import { NumberInput as MNumberInputField } from "@mantine/core"

import type { NumberInputFieldProps } from "./NumberInputField.types"

export const NumberInputField = ({...props}: NumberInputFieldProps) => {
  return <MNumberInputField {...props} />
}