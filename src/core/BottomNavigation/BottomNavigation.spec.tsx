import { screen, waitFor } from '@testing-library/react'

import { createTestWrapper } from 'src/testUtils'

import { BottomNavigation } from './BottomNavigation'

describe('BottomNavigation', () => {
  it('should have 3 default routes (home, create, list)', () => {
    createTestWrapper({ children: <BottomNavigation />, isLogged: true })

    const homeButton = screen.getAllByRole('link', { name: /home/i })[0]
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]

    const buttons = [homeButton, createButton, listButton]

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument()
    })
  })

  it('should have change the location based on which button was clicked', async () => {
    const { user } = createTestWrapper({
      children: <BottomNavigation />,
      isLogged: true,
    })
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]

    await user.click(createButton)
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /create new/i })
      ).toBeInTheDocument()
    })
  })

  it('should have change the location to list view', async () => {
    const { user } = createTestWrapper({
      children: <BottomNavigation />,
      isLogged: true,
    })
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]

    await user.click(listButton)
    const productsHeading = await screen.findByRole('heading', {
      name: /products list/i,
    })

    expect(productsHeading).toBeVisible()
  })
})
