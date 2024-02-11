import { render } from '@testing-library/react'
import { rest } from 'msw'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import { boxesList } from './fixtures/boxes/boxes'
import { categoriesList } from './fixtures/categories/categories'

import { productsList } from './fixtures/products/productsList'
import { Router, routes } from './router/Router'
import { AuthProvider } from './auth/AuthProvider'

export const FAKE_DOMAIN = 'https://sjngbjrbimlskuxzflby.supabase.co/rest/v1'
export const FAKE_AUTH_DOMAIN =
  'https://sjngbjrbimlskuxzflby.supabase.co/auth/v1'

export const handlers = [
  rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productsList))
  }),
  rest.get(`${FAKE_DOMAIN}/categories`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoriesList))
  }),
  rest.get(`${FAKE_DOMAIN}/boxes`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(boxesList))
  }),
  rest.post(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}))
  }),
  rest.post(`${FAKE_AUTH_DOMAIN}/token`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}))
  }),
  rest.post(`${FAKE_AUTH_DOMAIN}/recover`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}))
  }),
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

type Route = keyof typeof routes

export type FullWrapperProps = {
  children: React.ReactNode
  initialEntries?: Route[]
  isLogged?: boolean
}

export const createTestWrapper = ({
  children,
  initialEntries = [routes.home],
  isLogged = true,
}: FullWrapperProps) => {
  const currentUser = isLogged
    ? {
        id: '123',
        app_metadata: {
          provider: 'email',
        },
        user_metadata: {
          name: 'Mariusz',
        },
        created_at: new Date().toDateString(),
        aud: '123321',
      }
    : null
  const testQueryClient = createTestQueryClient()
  const wrapper = (
    <QueryClientProvider client={testQueryClient}>
      <MemoryRouter initialEntries={initialEntries}>
        <AuthProvider user={currentUser}>
          <MantineProvider>
            <Router />
            <Notifications />
            {children}
          </MantineProvider>
        </AuthProvider>
      </MemoryRouter>
    </QueryClientProvider>
  )
  return {
    user: userEvent.setup(),
    ...render(wrapper),
  }
}
