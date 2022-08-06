import { screen, waitFor } from "@testing-library/react"
import { createTestWrapper } from "src/testUtils"

import { ForgotPasswordContainer } from './ForgotPassword.container'

describe('ForgotPassword', () => {
  it('should allow to reset the password and on success show the message about next steps', async () => {
    const { user } = createTestWrapper({ children: <ForgotPasswordContainer />, isLogged: true })
    const input = screen.getByPlaceholderText(/email/i)
    const submitButton = screen.getByRole('button', { name: /reset password/i })

    expect(screen.getByText(/forgot password/i)).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    user.type(input, 'mycorrectemail@email.com')

    user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /check your email/i })).toBeInTheDocument()
    })
  }) 
})