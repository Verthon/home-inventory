import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ReactQueryProvider } from './api/reactQuery/ReactQueryProvider'
import { AuthProvider } from './auth/AuthProvider'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css'

import reportWebVitals from './reportWebVitals'
import { Router } from './router/Router'
import { RouterProvider } from './router/RouterProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MantineProvider>
      <NotificationsProvider>
        <ReactQueryProvider>
          <AuthProvider>
            <RouterProvider>
              <Router />
            </RouterProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
)

serviceWorkerRegistration.register();
reportWebVitals()
