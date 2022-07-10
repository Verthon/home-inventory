import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { Router } from 'src/router/Router';
import { createTestQueryClient } from 'src/testUtils';
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
    const form = screen.getAllByRole('form')[0]
    const nameInput = screen.getAllByPlaceholderText(/product name/i)[0]
    const shortDescriptionInput = screen.getAllByPlaceholderText(/short description/i)[0]
    const quantityInput = screen.getAllByPlaceholderText(/quantity/i)[0]
    const categorySelect = screen.getAllByPlaceholderText(/select category/i)[0]
    const boxNameSelect = screen.getAllByPlaceholderText(/select box name/i)[0]
    const expiryDateInput = screen.getAllByPlaceholderText(/expiry date/i)[0]
    const submitButton = screen.getAllByRole('button', { name: /create/i })[0]
    expect(submitButton).toBeDisabled()

    user.type(nameInput, 'Dandelion honey')
    user.type(shortDescriptionInput, 'Honey partially cyrstallized, 1kg jar')
    user.type(quantityInput, '3')
    user.type(categorySelect, 'Honeys')
    user.keyboard('enter')
    user.type(boxNameSelect, 'A1')
    await user.click(expiryDateInput)
    user.click(screen.getAllByRole('button', { name: '10' })[0])
  })
})