import { screen, waitFor } from '@testing-library/react'

import { routes } from 'src/router/Router'
import { createTestWrapper } from 'src/testUtils'

import { ProductsListContainer } from './ProductsList.container'

// Its time to switch to Cypress component testing
describe.skip('ProductsListContainer', () => {
  it('should fetch the list successfully', async () => {
    createTestWrapper({ children: <ProductsListContainer />, initialEntries: [routes.home], isLogged: true  });
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })
})
