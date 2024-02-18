import { setupServer } from 'msw/lib/node'

import { handlers } from '../mockServer/handlers'

export const testMockServer = setupServer(...handlers)
