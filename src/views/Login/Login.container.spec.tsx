import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

import { Router } from 'src/router/Router'
import { createTestQueryClient } from 'src/testUtils'

import { LoginContainer } from './Login.container'

describe('LoginContainer', () => {
  const createWrapper = () => {
    const client = createTestQueryClient()
    render(
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={['/login']}>
          <Router />
          <LoginContainer />
        </MemoryRouter>
      </QueryClientProvider>
    )
  }
  it('should allow to submit if the email and password is correctly filled', async () => {
    createWrapper()
    const user = userEvent.setup()
    const emailInput = screen.getByPlaceholderText(/your email/i)
    const passwordInput = screen.getByPlaceholderText(/your password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
    expect(submitButton).toBeDisabled()

    await user.type(emailInput, 'mycorrectemail@.test.plo')
    await user.type(passwordInput, 'admin1234')

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)
  })
})
