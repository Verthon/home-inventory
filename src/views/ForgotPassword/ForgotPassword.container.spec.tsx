import { screen, waitFor } from "@testing-library/react"
import { routes } from "src/router/Router"
import { createTestWrapper } from "src/testUtils"

import { ForgotPasswordContainer } from './ForgotPassword.container'

describe('ForgotPassword', () => {
  it('should allow to reset the password and on success show the message about next steps', async () => {
    const { user } = createTestWrapper({ children: <ForgotPasswordContainer />, initialEntries: [routes.resetPassword], isLogged: true })
    const input = screen.getAllByPlaceholderText(/email/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /reset password/i })[0]

    expect(submitButton).toBeDisabled()

    await user.type(input, 'mycorrectemail@email.com')

    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /check your email/i })).toBeInTheDocument()
    })
  })
  
  it('should not allow submit and show validation errors', async() => {
    const { user } = createTestWrapper({ children: <ForgotPasswordContainer />, initialEntries: [routes.resetPassword], isLogged: true })
    const input = screen.getAllByPlaceholderText(/email/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /reset password/i })[0]
    expect(submitButton).toBeDisabled()

    await user.type(input, 'incorrect-crap')

    await user.click(submitButton)

    await waitFor(
      () => {
        expect(screen.getByText(/correct email format/i)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )

    expect(submitButton).toBeDisabled()
  })
})