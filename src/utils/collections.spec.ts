import { isEmptyObject, isObject } from "./collections"

describe('collections', () => {
  describe('isObject', () => {
    it('should return true/false depending if it is object or not', () => {
      expect(isObject({})).toEqual(true)
      expect(isObject([])).toEqual(false)
      expect(isObject(undefined)).toEqual(false)
      expect(isObject(null)).toEqual(false)
    })
  })

  describe('isEmptyObject', () => {
    expect(isEmptyObject(undefined)).toEqual(false)
    expect(isEmptyObject({ test: 1 })).toEqual(false)
    expect(isEmptyObject({})).toEqual(true)
  })
})
