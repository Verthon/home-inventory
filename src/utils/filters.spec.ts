import { formatEmptyValue } from './filters'

describe('filters', () => {
  describe('formatEmptyValue', () => {
    it('should leave non empty string or number as it is and convert it to string', () => {
      expect(formatEmptyValue(2)).toEqual('2')
      expect(formatEmptyValue('ProductName')).toEqual('ProductName')
    })

    it('should retrun "-" once there is no value', () => {
      expect(formatEmptyValue(null)).toEqual('-')
      expect(formatEmptyValue(undefined)).toEqual('-')
    })
  })
})