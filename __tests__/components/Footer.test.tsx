import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '@/components/layout/Footer'

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />)
    const copyrightText = screen.getByText(/André Victor/i)
    expect(copyrightText).toBeInTheDocument()
  })
})
