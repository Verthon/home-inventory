import { screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'

import { routes } from 'src/router/Router'
import { server } from 'src/setupTests'
import { createTestWrapper, FAKE_DOMAIN } from 'src/testUtils'

import { CreateFormContainer } from './CreateForm.container'

describe('CreateFormContainer', () => {
  it('should allow to create new product just by filling required fields', async () => {
    const { user } = createTestWrapper({ children: <CreateFormContainer />, initialEntries: [routes.create], isLogged: true  });
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput =
      screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const categorySelect = screen.getAllByPlaceholderText(/select category/i)[0]
    const boxNameSelect = screen.getAllByPlaceholderText(/select box name/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /create/i })[0]
    expect(submitButton).toBeDisabled()
    await waitFor(
      () => {
        expect(categorySelect).not.toBeDisabled()
      },
      { timeout: 2000 }
    )
    await waitFor(
      () => {
        expect(boxNameSelect).not.toBeDisabled()
      },
      { timeout: 2000 }
    )

    await user.type(nameInput, 'Dandelion honey')
    await user.type(
      shortDescriptionInput,
      'Honey partially crystallized, 1kg jar'
    )
    await user.type(quantityInput, '3')
    await user.click(categorySelect)
    await waitFor(() => {
      user.click(screen.getByText(/honeys/i))
    })
    await user.click(boxNameSelect)
    await waitFor(() => {
      user.click(screen.getByText('A1'))
    })
    await user.click(expiryDateInput)
    const nextMonthButton = screen.getAllByRole('button')[2]
    await user.click(nextMonthButton)

    await waitFor(
      () => {
        user.click(screen.getAllByRole('button', { name: '1' })[0])
      },
      { timeout: 1000 }
    )

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /products list/i })
      ).toBeInTheDocument()
    })
  }, 30000)

  it('should not redirect to list on api error', async () => {
    server.use(
      rest.post(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}))
      })
    )

    const { user } = createTestWrapper({ children: <CreateFormContainer />, initialEntries: [routes.create], isLogged: true  });
    // act(() => {
    //   const { user } = createTestWrapper({ children: <CreateFormContainer />, initialEntries: [routes.create], isLogged: true  });
    // })
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput =
      screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const categorySelect = screen.getAllByPlaceholderText(/select category/i)[0]
    const boxNameSelect = screen.getAllByPlaceholderText(/select box name/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /create/i })[0]
    expect(submitButton).toBeDisabled()

    await user.type(nameInput, 'Dandelion honey')
    await user.type(
      shortDescriptionInput,
      'Honey partially crystallized, 1kg jar'
    )
    await user.type(quantityInput, '3')
    await waitFor(() => {
      expect(categorySelect).not.toBeDisabled()
    })
    await waitFor(() => {
      expect(boxNameSelect).not.toBeDisabled()
    })
    await user.click(categorySelect)
    await waitFor(() => {
      user.click(screen.getByText(/honeys/i))
    })
    await user.click(boxNameSelect)
    await waitFor(() => {
      user.click(screen.getByText('A1'))
    })
    await user.click(expiryDateInput)
    const nextMonthButton = screen.getAllByRole('button')[2]
    await user.click(nextMonthButton)

    await waitFor(() => {
      user.click(screen.getAllByRole('button', { name: '1' })[0])
    })

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)

    await waitFor(() => {
      expect(
        screen.queryByRole('heading', { name: /products list/i })
      ).not.toBeInTheDocument()
    })
  }, 30000)

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
