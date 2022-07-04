import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Create } from '../../views/Create/Create';
import { Home } from '../../views/Home/Home';

import { BottomNavigation } from './BottomNavigation';

const createWrapper = () => {
  render(<MemoryRouter initialEntries={["/"]}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="create" element={<Create />}></Route>
    </Routes>
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

  it('should have change the location based on which button was clicked', () => {
    createWrapper()
    const createButton = screen.getAllByRole('link', { name: /create/i })[0]

    userEvent.click(createButton)

    expect(screen.getByRole('heading', { name: 'Create new' })).toBeInTheDocument();
  })
})