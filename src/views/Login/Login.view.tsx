import * as React from 'react'
import { AppShell } from 'src/appshell/AppShell'
import { LoginContainer } from './Login.container'

const LoginView = () => {
  return (
    <AppShell>
      <h1>Login</h1>
      <LoginContainer />
    </AppShell>
  )
}

export default LoginView