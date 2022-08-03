export const isObject = (input: unknown): input is Record<string, unknown> => {
  return typeof input === 'object' && input !== null && !Array.isArray(input)
}

export const isEmptyObject = (input: unknown) => {
  return isObject(input) && Object.keys(input).length === 0;
}
