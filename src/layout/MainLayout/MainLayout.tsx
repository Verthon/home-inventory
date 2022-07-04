import * as React from 'react'

import { Container } from 'src/core/Container/Container'

import styles from './MainLayout.module.css'
import type { MainLayoutProps } from './MainLayout.types'

export const MainLayout = ({ children, bottomNavbar }: MainLayoutProps) => {
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <Container>
        {children}
      </Container>
    </div>
    <footer className={styles.footer} >{bottomNavbar}</footer>
  </div>
}