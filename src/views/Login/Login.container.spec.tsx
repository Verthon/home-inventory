import { User } from '@supabase/supabase-js'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

import { AuthProvider } from 'src/auth/AuthProvider'
import { Router } from 'src/router/Router'
import { createTestQueryClient } from 'src/testUtils'

import { LoginContainer } from './Login.container'

describe('LoginContainer', () => {
  const createWrapper = (user: User | null = null) => {
    const client = createTestQueryClient()
    render(
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={['/login']}>
          <AuthProvider user={user}>
            <Router />
            <LoginContainer />
          </AuthProvider>
        </MemoryRouter>
      </QueryClientProvider>
    )
  }

  it('should allow to submit if the email and password is correctly filled and redirect to homepage', async () => {
    createWrapper({ 
      id: '123',
      app_metadata: {
        provider: 'email'
      },
      user_metadata: {
        name: 'Mariusz',
      },
      created_at: new Date().toDateString(),
      aud: '123321'
    })
    const user = userEvent.setup()
    const emailInput = screen.getAllByPlaceholderText(/your email/i)[0]
    const passwordInput = screen.getAllByPlaceholderText(/your password/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /login/i })[0]
    expect(submitButton).toBeDisabled()

    await user.type(emailInput, 'mycorrectemail@test.pl')
    await user.type(passwordInput, 'admin1234')

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
    })
  })

  it('should display the validation errors on blur and prevent submiting', async () => {
    createWrapper()
    const user = userEvent.setup()
    const emailInput = screen.getAllByPlaceholderText(/your email/i)[0]
    const passwordInput = screen.getAllByPlaceholderText(/your password/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /login/i })[0]

    await user.type(emailInput, 'test')
    await user.type(passwordInput, 'pass')

    await waitFor(
      () => {
        expect(screen.getByText(/correct email format/i)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )

    expect(submitButton).toBeDisabled()
  })
})
