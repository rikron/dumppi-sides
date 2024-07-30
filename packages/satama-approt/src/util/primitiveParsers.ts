export const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

export const parseStringStrict = (text: unknown): string => {
  if (text === null || text === undefined || !isString(text)) {
    throw new Error('Invalid or missing data')
  }
  return text
}
