import { isString } from './primitiveParsers'

export const parseDateStrict = (date: unknown): Date => {
  if (!date || !isString(date)) {
    throw new Error('Invalid or missing date')
  }
  const timezoneOffset = (new Date().getTimezoneOffset() / 60) * -1
  const parsedDate = new Date(date)
  parsedDate.setHours(parsedDate.getHours() + timezoneOffset)

  return parsedDate
}

export const parseDate = (date: unknown): Date | null => {
  if (date === null) {
    return null
  }
  if (!date || !isString(date)) {
    throw new Error('Invalid or missing date')
  }
  const timezoneOffset = (new Date().getTimezoneOffset() / 60) * -1
  const parsedDate = new Date(date)
  parsedDate.setHours(parsedDate.getHours() + timezoneOffset)
  return parsedDate
}
