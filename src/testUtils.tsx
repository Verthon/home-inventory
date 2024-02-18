import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import { Router, routes } from './router/Router'
import { AuthProvider } from './auth/AuthProvider'

export const FAKE_DOMAIN = 'https://sjngbjrbimlskuxzflby.supabase.co/rest/v1'
export const FAKE_AUTH_DOMAIN =
  'https://sjngbjrbimlskuxzflby.supabase.co/auth/v1'

const createUser = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const currentUser = isLoggedIn
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

  return currentUser
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

type Route = keyof typeof routes

type FullWrapperProps = {
  children: React.ReactNode
  initialEntries?: Route[]
  isLogged?: boolean
}

export const TestProviders = ({
  children,
  initialEntries = [routes.home],
  isLogged = true,
}: FullWrapperProps) => {
  const currentUser = createUser({ isLoggedIn: isLogged })
  const testQueryClient = createTestQueryClient()

  return (
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
}

export const createTestWrapper = ({
  children,
  initialEntries = [routes.home],
  isLogged = true,
}: FullWrapperProps) => {
  const wrapper = (
    <TestProviders initialEntries={initialEntries} isLogged={isLogged}>
      {children}
    </TestProviders>
  )
  return {
    user: userEvent.setup(),
    ...render(wrapper),
  }
}
