import * as React from 'react'
import { AppShell } from 'src/appshell/AppShell'
import { HomeContainer } from './Home.container'

const HomeView = () => {
  return (
    <AppShell>
      <h1>Home</h1>
      <HomeContainer />
    </AppShell>
  )
}

export default HomeView