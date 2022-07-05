import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Router } from 'src/router/Router';

import { BottomNavigation } from './BottomNavigation';

const createWrapper = () => {
  render(<MemoryRouter initialEntries={["/"]}>
    <Router />
    <BottomNavigation />
  </MemoryRouter>)
}

describe('BottomNavigation', () => {
  it('should have 3 default routes (home, create, list)', () => {
    createWrapper()

    const homeButton = screen.getAllByRole('link', { name: /home/i })[0]
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]

    const buttons = [homeButton, createButton, listButton]

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    })
  })

  it('should have change the location based on which button was clicked', async () => {
    createWrapper()
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]

    userEvent.click(createButton)
    expect(screen.getByRole('heading', { name: /create new/i })).toBeInTheDocument();
  })

  it('should have change the location to list view', async () => {
    createWrapper()
    const listButton = screen.getAllByRole('link', { name: /list/i })[0]


    userEvent.click(listButton)
    expect(screen.getByRole('heading', { name: /products list/i })).toBeInTheDocument();
  })
})