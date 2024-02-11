import { DatePickerInput as MDatePicker } from '@mantine/dates'
import type { DatePickerProps } from './DatePicker.types'

export const DatePicker = ({
  label,
  type = 'default',
  name,
  placeholder,
  disabled,
  minDate,
  required,
}: DatePickerProps) => {
  return (
    <MDatePicker
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      minDate={minDate}
      required={required}
    />
  )
}
