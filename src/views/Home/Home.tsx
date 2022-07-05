import * as React from 'react'
import { AppShell } from 'src/appshell/AppShell'

export const Home = () => {
  return (
    <AppShell>
      <h1>Home</h1>
      <h2>Newly added</h2>
      <p>Check the newly added products</p>
      <h2>Running low</h2>
      <p>Browse products that are below the treshold</p>
    </AppShell>
  )
}