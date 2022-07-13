export const formatEmptyValue = <Type>(value: Type): string => {
  if (value) {
    return String(value);
  }

  return '-'
}