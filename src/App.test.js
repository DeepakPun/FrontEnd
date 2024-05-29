import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders a top level heading', () => {
  render(<App />)
  const heading = screen.getByText(/How are you doing?/)
  expect(heading).toBeInTheDocument()
})
