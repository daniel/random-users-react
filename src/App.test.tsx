import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Secret Profiles header', () => {
  const { getByText } = render(<App />)
  const element = getByText(/Secret Profiles/i)
  expect(element).toBeInTheDocument()
})
