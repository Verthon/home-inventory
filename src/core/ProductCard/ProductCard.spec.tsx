import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('should display skeleton loader in loading state', () => {
    render(<ProductCard loading boxId={2} productName='Eko Farma Strawberry Jam' quantity={1} />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display all the information', () => {
    render(<ProductCard boxId={2} productName='Eko Farma Strawberry Jam' quantity={1} />)

    expect(screen.getByText(/Eko Farma Strawberry Jam/i)).toBeInTheDocument();
  })
})