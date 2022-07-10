import * as React from 'react'

import { AppShell } from 'src/appshell/AppShell'

import { CreateFormContainer } from './CreateForm.container'

export const CreateView = () => {
  return (
    <AppShell>
      <h1>Create new</h1>
      <CreateFormContainer />
    </AppShell>
  )
}