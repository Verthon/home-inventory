import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'src/testUtils';

import { ProductsListContainer } from './ProductsList.container'

describe('ProductsListContainer', () => {
  it('should fetch the list successfully', async () => {
    renderWithProviders(<ProductsListContainer />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })
  })
})