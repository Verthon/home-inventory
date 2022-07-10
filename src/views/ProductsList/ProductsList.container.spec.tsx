import { screen, waitFor } from '@testing-library/react'
import { rest } from 'msw';
import { server } from 'src/setupTests';
import { FAKE_DOMAIN, renderWithProviders } from 'src/testUtils';

import { ProductsListContainer } from './ProductsList.container'

describe('ProductsListContainer', () => {
  it('should fetch the list successfully', async () => {
    renderWithProviders(<ProductsListContainer />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  })

  it('should display error message with refetch button', async () => {
    server.use(
      rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    )
    renderWithProviders(<ProductsListContainer />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /refetch/i })).toBeInTheDocument();
  })

  it('should display empty state message with redirect to create product form', async () => {
    server.use(
      rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    )
    renderWithProviders(<ProductsListContainer />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: /No products yet/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /refetch/i })).toBeInTheDocument();
  })
})