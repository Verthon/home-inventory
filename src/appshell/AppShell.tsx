import * as React from 'react'
import { BottomNavigation } from 'src/core/BottomNavigation/BottomNavigation'

import { Container } from 'src/core/Container/Container'

import type { AppShellProps } from './AppShell.types'

export const AppShell = ({children}: AppShellProps) => {
  return <Container>
    {children}
    <BottomNavigation />
  </Container>
}