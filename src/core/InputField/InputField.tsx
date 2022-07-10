import { TextInput } from '@mantine/core'

import type { InputFieldProps } from './InputField.types'

export const InputField = ({...props}: InputFieldProps) => {
  return <TextInput {...props} />
}