import { render } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { boxesList } from "./fixtures/boxes/boxes";
import { categoriesList } from "./fixtures/categories/categories";

import { productsList } from "./fixtures/products/productsList";
import { Router } from "./router/Router";

export const FAKE_DOMAIN = "https://sjngbjrbimlskuxzflby.supabase.co/rest/v1";

export const handlers = [
  rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productsList));
  }),
  rest.get(`${FAKE_DOMAIN}/categories`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoriesList));
  }),
  rest.get(`${FAKE_DOMAIN}/boxes`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(boxesList));
  }),
];

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export const renderWithProviders = (ui: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <MemoryRouter initialEntries={["/"]}>
          <QueryClientProvider client={testQueryClient}>
            {rerenderUi}
          </QueryClientProvider>
        </MemoryRouter>
      ),
  };
};

export const createFullWrapper = () => {
  const testQueryClient = createTestQueryClient();
  return ({ children }: React.PropsWithChildren) => (
    <QueryClientProvider client={testQueryClient}>
      <MemoryRouter initialEntries={["/"]}>
        <Router />
        {children}
      </MemoryRouter>
    </QueryClientProvider>
  );
};
