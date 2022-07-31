import { screen, waitFor } from '@testing-library/react'

import { routes } from 'src/router/Router'
import { createTestWrapper } from 'src/testUtils'

import { LoginContainer } from './Login.container'

describe('LoginContainer', () => {

  it('should allow to submit if the email and password is correctly filled and redirect to homepage', async () => {
    const { user } = createTestWrapper({ children: <LoginContainer />, initialEntries: [routes.login], isLogged: true  });
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
    const { user } = createTestWrapper({ children: <LoginContainer />, initialEntries: [routes.login], isLogged: true  });
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
