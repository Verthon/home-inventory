import { render, screen, waitFor } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { Router } from "src/router/Router";
import { createTestQueryClient } from "src/testUtils";

import { HomeContainer } from "./Home.container";


const createWrapper = () => {
  const client = createTestQueryClient();
  render(<QueryClientProvider client={client}>
    <MemoryRouter>
      <Router />
      <HomeContainer />
    </MemoryRouter>
  </QueryClientProvider>)
}

describe('HomeContainer', () => {
  it('should redirect to login once user is not logged in', async () => {
    createWrapper()

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /login/i})).toBeInTheDocument()
    })
  })
})