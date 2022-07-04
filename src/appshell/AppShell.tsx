import * as React from 'react'
import { BottomNavigation } from 'src/core/BottomNavigation/BottomNavigation'

import { MainLayout } from 'src/layout/MainLayout/MainLayout'

import type { AppShellProps } from './AppShell.types'

export const AppShell = ({children}: AppShellProps) => {
  return <MainLayout bottomNavbar={<BottomNavigation />}>
    {children}
  </MainLayout>
}