import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

test("renders Error component at the /error path", () => {
  render(
    <MemoryRouter initialEntries={["/error"]}>
      <App />
    </MemoryRouter>,
  )

  // Use a regular expression to match part of the content
  const errorComponent = screen.getByText(/Error/i) // The "i" flag makes it case-insensitive
  expect(errorComponent).toBeInTheDocument()
})
