import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from 'src/auth/AuthProvider'
import { Router } from 'src/router/Router'
import { createTestQueryClient } from 'src/testUtils'

import { BottomNavigation } from './BottomNavigation'

const createWrapper = () => {
  const client = createTestQueryClient()
  render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={['/']}>
        <AuthProvider>
          <Router />
          <BottomNavigation />
        </AuthProvider>
      </MemoryRouter>
    </QueryClientProvider>
  )
}

describe('BottomNavigation', () => {
  it('should have 3 default routes (home, create, list)', () => {
    createWrapper()

    const homeButton = screen.getAllByRole('link', { name: /home/i })[0]
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]

    const buttons = [homeButton, createButton, listButton]

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument()
    })
  })

  it('should have change the location based on which button was clicked', async () => {
    createWrapper()
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]
    const user = userEvent.setup()

    user.click(createButton)
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /create new/i })
      ).toBeInTheDocument()
    })
  })

  it('should have change the location to list view', async () => {
    createWrapper()
    const user = userEvent.setup()
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]

    await user.click(listButton)
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /products list/i })
      ).toBeInTheDocument()
    })
  })
})
