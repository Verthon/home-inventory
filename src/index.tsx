import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'

import { ReactQueryProvider } from './api/reactQuery/ReactQueryProvider'
import { AuthProvider } from './auth/AuthProvider'
import './index.css'

import reportWebVitals from './reportWebVitals'
import { Router } from './router/Router'
import { RouterProvider } from './router/RouterProvider'

const root = createRoot(document.getElementById('root') as HTMLElement)
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

reportWebVitals()
