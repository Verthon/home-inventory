import { getProducts } from './supabaseClient'

describe('supabaseClient', () => {
  it('should throw an error in case getProducts api call fail', () => {
    expect(getProducts()).toThrowError()
  })
})