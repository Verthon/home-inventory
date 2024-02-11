import '@testing-library/jest-dom'
import { setLogger } from 'react-query'
import { setupServer } from 'msw/node'

import { handlers } from './testUtils'

global.ResizeObserver = require('resize-observer-polyfill')

export const server = setupServer(...handlers)

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
})

const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Establish API mocking before all tests.
beforeAll(() => {
  // Object.defineProperty(window, 'matchMedia', {
  //   writable: true,
  //   value: jest.fn().mockImplementation((query) => ({
  //     matches: false,
  //     media: query,
  //     onchange: null,
  //     addListener: jest.fn(),
  //     removeListener: jest.fn(),
  //     addEventListener: jest.fn(),
  //     removeEventListener: jest.fn(),
  //     dispatchEvent: jest.fn(),
  //   })),
  // })

  server.listen()
})
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
