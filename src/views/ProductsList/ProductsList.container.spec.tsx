import { screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'

import { routes } from 'src/router/Router'
import { server } from 'src/setupTests'
import { createTestWrapper, FAKE_DOMAIN } from 'src/testUtils'

import { ProductsListContainer } from './ProductsList.container'

describe('ProductsListContainer', () => {
  it('should fetch the list successfully', async () => {
    createTestWrapper({ children: <ProductsListContainer />, initialEntries: [routes.home], isLogged: true  });
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })

  it('should display error message with refetch button', async () => {
    server.use(
      rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}))
      })
    )
    createTestWrapper({ children: <ProductsListContainer />, initialEntries: [routes.home], isLogged: true  });
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(
      screen.getByRole('heading', { name: /something went wrong/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /refetch/i })).toBeInTheDocument()
  })

  it('should display empty state message with redirect to create product form', async () => {
    server.use(
      rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
      })
    )
    const { user } = createTestWrapper({ children: <ProductsListContainer />, initialEntries: [routes.home], isLogged: true  });
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(
      screen.getByRole('heading', { name: /No products yet/i })
    ).toBeInTheDocument()
    const redirectButton = screen.getByRole('button', { name: /create/i })
    user.click(redirectButton)

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /create new/i })
      ).toBeInTheDocument()
    })
  })
})
