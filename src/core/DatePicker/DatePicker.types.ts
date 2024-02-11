import { DatePickerInputProps as MDatePickerProps } from '@mantine/dates'

export type DatePickerProps = {
  disabled?: boolean
  required?: boolean
} & MDatePickerProps
