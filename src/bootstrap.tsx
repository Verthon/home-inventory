import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'

import { ReactQueryProvider } from './api/reactQuery/ReactQueryProvider'
import { AuthProvider } from './auth/AuthProvider'
import { Router } from './router/Router'
import { RouterProvider } from './router/RouterProvider'
import './index.css'

export const renderApp = () => {
  if (process.env.NODE_ENV !== 'production') {
    import('./lib/mockServer/enableMockServer').then(({ enableMockServer }) =>
      enableMockServer()
    )
  }

  const container = document.getElementById('root')
  const root = createRoot(container as Element)
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <Notifications />
        <ReactQueryProvider>
          <AuthProvider>
            <RouterProvider>
              <Router />
            </RouterProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </MantineProvider>
    </React.StrictMode>
  )
}

