import { screen, waitFor } from '@testing-library/react'

import { routes } from 'src/router/Router'
import { createTestWrapper } from 'src/testUtils'

import { CreateFormContainer } from './CreateForm.container'

// Its time to switch to Cypress component testing
describe.skip('CreateFormContainer', () => {
  it('should show the validation errors for user on blur', async () => {
    const { user } = createTestWrapper({ children: <CreateFormContainer />, initialEntries: [routes.create], isLogged: true  });
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput =
      screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]

    await user.type(nameInput, 't')
    await user.type(quantityInput, '200')

    await waitFor(() => {
      expect(
        screen.getByText(/Name should have at least 2 letters/i)
      ).toBeInTheDocument()
    })

    await user.type(shortDescriptionInput, 'test')

    await waitFor(() => {
      expect(
        screen.getByText(/Max 100 products is supported for one product/i)
      ).toBeInTheDocument()
    })

    await user.click(expiryDateInput)

    await waitFor(() => {
      expect(
        screen.getByText(/Short description should have at lease 15 letters/i)
      ).toBeInTheDocument()
    })
  })
})
