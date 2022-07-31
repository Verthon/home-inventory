import { screen, waitFor } from '@testing-library/react'

import { createTestWrapper } from 'src/testUtils'

import { HomeContainer } from './Home.container'

describe('HomeContainer', () => {
  it('should redirect to login once user is not logged in', async () => {
    createTestWrapper({ children: <HomeContainer />, isLogged: false  });

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /login/i })
      ).toBeInTheDocument()
    })
  })

  it('should show the homepage content', async () => {
    createTestWrapper({ children: <HomeContainer />, isLogged: true  });

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /home/i })
      ).toBeInTheDocument()
    })
  })
})
