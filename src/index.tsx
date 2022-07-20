import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from './api/reactQuery/ReactQueryProvider';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Router } from './router/Router';
import { RouterProvider } from './router/RouterProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <NotificationsProvider>
        <ReactQueryProvider>
          <RouterProvider>
            <Router />
          </RouterProvider>
        </ReactQueryProvider>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
