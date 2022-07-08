import "@testing-library/jest-dom";
import { setLogger } from "react-query";
import { setupServer } from "msw/node";

import { handlers } from "./testUtils";

export const server = setupServer(...handlers);

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
