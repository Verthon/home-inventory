import { DatePicker as MDatePicker } from "@mantine/dates";
import type { DatePickerProps } from "./DatePicker.types";

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return <MDatePicker {...props} />
}