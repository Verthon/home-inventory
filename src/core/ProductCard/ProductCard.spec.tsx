import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('should display skeleton loader in loading state', () => {
    render(<ProductCard loading boxId='A1' productName='Eko Farma Strawberry Jam' quantity='1' />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display all the information with single item indicator', () => {
    render(<ProductCard boxId='A2' productName='Eko Farma Strawberry Jam' quantity='1' />)

    expect(screen.getByText(/Eko Farma Strawberry Jam/i)).toBeInTheDocument();
    expect(screen.getByText(/one item/i)).toBeInTheDocument();
  })

  it('should display the quantity in plural', () => {
    render(<ProductCard boxId='A2' productName='Eko Farma Strawberry Jam' quantity='2' />)

    expect(screen.getByText(/Eko Farma Strawberry Jam/i)).toBeInTheDocument();
    expect(screen.getByText(/2 items/i)).toBeInTheDocument();
  })
})