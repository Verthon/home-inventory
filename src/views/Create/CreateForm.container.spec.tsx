import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { Router } from 'src/router/Router';
import { server } from 'src/setupTests';
import { createTestQueryClient, FAKE_DOMAIN } from 'src/testUtils';
import { CreateFormContainer } from './CreateForm.container'

const createWrapper = () => {
  const client = createTestQueryClient();
  render(<QueryClientProvider client={client}>
    <MemoryRouter initialEntries={["/create"]}>
      <Router />
      <CreateFormContainer />
    </MemoryRouter>
  </QueryClientProvider>)
}

describe('CreateFormContainer', () => {
  it('should allow to create new product just by filling required fields', async () => {
    const user = userEvent.setup()
    createWrapper()
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput = screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const categorySelect = screen.getAllByPlaceholderText(/select category/i)[0]
    const boxNameSelect = screen.getAllByPlaceholderText(/select box name/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /create/i })[0]
    expect(submitButton).toBeDisabled()

    await user.type(nameInput, 'Dandelion honey')
    await user.type(shortDescriptionInput, 'Honey partially crystallized, 1kg jar')
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
    await waitFor(() => {
      user.click(screen.getAllByRole('button', { name: '10' })[0])
    })

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /products list/i })).toBeInTheDocument();
    }, { timeout: 2000 })
  }, 6000)

  it('should not redirect to list on api error', async () => {
    server.use(
      rest.post(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    )
    const user = userEvent.setup()
    createWrapper()
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput = screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const categorySelect = screen.getAllByPlaceholderText(/select category/i)[0]
    const boxNameSelect = screen.getAllByPlaceholderText(/select box name/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /create/i })[0]
    expect(submitButton).toBeDisabled()

    await user.type(nameInput, 'Dandelion honey')
    await user.type(shortDescriptionInput, 'Honey partially crystallized, 1kg jar')
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
    await waitFor(() => {
      user.click(screen.getAllByRole('button', { name: '10' })[0])
    })

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /products list/i })).not.toBeInTheDocument();
    }, { timeout: 2000 })
  }, 8000)

  it('should show the validation and should not allow to submit with the validation errors', async () => {
    const user = userEvent.setup()
    createWrapper()
  })
})