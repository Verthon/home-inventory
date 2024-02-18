import '@testing-library/jest-dom'
import { setLogger } from 'react-query'

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
})
